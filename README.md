# Framer Bridge

A Framer plugin that reads the open Framer project and exports it as JSON, so its
structure can be handed to something outside Framer — a chat, a repo, a script.

Framer has no public REST API and no official MCP server, so a plugin running on
the canvas is the only supported way to reach project data. This is that plugin.

## What it reads

Everything comes from documented read methods on `@framer/plugin` v4:

| Section | Source |
| --- | --- |
| Project id and name | `getProjectInfo()` |
| Production / staging URLs | `getPublishInfo()` |
| Pages (path, CMS template link) | `getNodesWithType("WebPageNode")` |
| Components | `getNodesWithType("ComponentNode")` |
| CMS collections, fields, item counts | `getCollections()` → `getFields()`, `getItems()` |
| Code files (path, exports, line count, optional source) | `getCodeFiles()` |
| Color and text styles | `getColorStyles()`, `getTextStyles()` |
| Redirects | `getRedirects()` |
| Locales | `getLocales()` |

Nothing is written. The plugin calls no mutating method.

Each section is read independently, so one call your plan or role doesn't permit
degrades that section only — the failure is listed under `errors` in the output
and shown in the panel rather than swallowed.

## Running it

Requires Node 18+. On your own machine, not a remote container — Framer has to
reach your `localhost`.

```bash
npm install
npm run dev
```

Then in Framer:

1. Open the project you want to read.
2. Enable developer tools: Framer menu → **Preferences** → **Developer Tools**.
3. Toolbar → **Plugins** → **Open Development Plugin**.

The panel opens top-right. Click **Read project**, then **Copy JSON** or
**Download**.

`npm run dev` serves over HTTPS via `vite-plugin-mkcert`, which Framer requires.
The first run downloads a `mkcert` binary and installs a local CA, so expect a
one-time password prompt. If an ad blocker or Brave blocks localhost, allow-list
`framer.com`.

## Output

```jsonc
{
  "capturedAt": "2026-07-29T12:00:00.000Z",
  "project": { "id": "…", "name": "My Site" },
  "publish": { "production": { "url": "…", "deploymentTime": 0 }, "staging": null },
  "pages": [{ "id": "…", "path": "/pricing", "collectionId": null }],
  "collections": [
    { "id": "…", "name": "Blog", "slugFieldName": "Slug", "managedBy": "user",
      "itemCount": 12, "fields": [{ "id": "…", "name": "Title", "type": "string" }] }
  ],
  "errors": []
}
```

`WebPageNode` exposes no name, so a page's `path` is its identity.

**Include code file contents** is off by default — it embeds the full source of
every code component and makes the JSON much larger. Turn it on when the code
itself is what you need reviewed.

## Layout

| Path | Role |
| --- | --- |
| `src/snapshot.ts` | All reads and the JSON shape. No UI. |
| `src/App.tsx` | Panel: trigger, counts, copy/download. |
| `framer.json` | Plugin id, name, and mode (`canvas`). |

## Checks

```bash
npx tsc --noEmit   # types
npm run lint       # eslint
npm run build      # production bundle
npm run pack       # plugin.zip for marketplace submission
```

`skipLibCheck` is on in `tsconfig.json`: `@framer/plugin` v4 ships a bundled
`.d.ts` containing unresolved internal names, which fails a full lib check
regardless of this project's own code.
