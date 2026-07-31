# CLAUDE.md — Design System & Figma Integration Rules

## Reality check first

This repo (**Framer Bridge**) is a single-screen Framer plugin that reads project
data and exports JSON. It is not a product UI codebase — there is no component
library, no token pipeline, and no icon system of its own. If a task calls for
"implementing a Figma design" in this repo, that almost always means either:

- **the wrong repo** — most Figma work (posters, social assets, guidebooks —
  e.g. the MADK 2026 file) belongs to a *design* file, not this plugin's code,
  and has no code counterpart here at all; or
- **the plugin's own panel UI** (`src/App.tsx` + `src/App.css`), which is the
  only screen this codebase renders.

Don't invent tokens, components, or an icon system that isn't here. Use what's
below.

## 1. Token Definitions

No custom token file exists. All color/spacing primitives come from Framer's
own plugin design system, imported once in `src/main.tsx`:

```ts
import "@framer/plugin/framer.css"
```

That stylesheet defines CSS custom properties consumed directly in
`src/App.css`, e.g.:

```css
color: var(--framer-color-text-tertiary);
border: 1px solid var(--framer-color-divider);
background: var(--framer-color-bg-secondary);
```

Known variables in use: `--framer-color-text`, `--framer-color-text-secondary`,
`--framer-color-text-tertiary`, `--framer-color-divider`,
`--framer-color-bg-secondary`. Don't hardcode hex values in this codebase —
match plugin chrome by using an existing `--framer-color-*` variable. If a
design calls for a color with no matching variable, ask before inventing one;
these variables are themed by Framer's own light/dark host, not by us.

No spacing/typography scale exists either — `src/App.css` uses literal `px`
values directly (`padding: 0 15px 15px 15px`, `gap: 10px`, `border-radius: 8px`).
Match the existing literal values rather than introducing a scale.

## 2. Component Library

There is exactly one component file: `src/App.tsx`. It exports `App` and one
small local helper, `Row` (a label/value line in the summary table). There is
no shared component directory, no Storybook, no `.stories.tsx` files.

```tsx
function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="row">
      <span className="row-label">{label}</span>
      <span className="row-value">{value}</span>
    </div>
  )
}
```

If a Figma design needs turning into a new UI piece here, add it as a local
function inside `App.tsx` (as `Row` is) unless it's reused in more than one
place — this project has intentionally stayed single-file.

## 3. Frameworks & Libraries

- **UI**: React 18 (`react`, `react-dom`), function components + hooks only
  (`useState`); no class components, no external state library.
- **Plugin host SDK**: `@framer/plugin` v4 — provides `framer.showUI()`,
  `framer.notify()`, and the read methods used in `src/snapshot.ts`
  (`getProjectInfo`, `getNodesWithType`, `getCollections`, etc.).
- **Styling**: plain CSS (`src/App.css`), no CSS-in-JS, no Tailwind, no CSS
  Modules — one global stylesheet imported by the one component that needs it.
- **Build**: Vite 8, via `@vitejs/plugin-react`, `vite-plugin-mkcert` (serves
  HTTPS on localhost, required by Framer), and `vite-plugin-framer`
  (`vite.config.ts`).
- **Lint/types**: ESLint 9 flat config (`eslint.config.js`) +
  `typescript-eslint`; TypeScript strict mode (`tsconfig.json`), `noEmit`,
  `skipLibCheck: true` (required — `@framer/plugin`'s bundled `.d.ts` fails a
  full lib check otherwise).

## 4. Asset Management

One static asset: `public/icon.svg`, referenced by path in `framer.json`
(`"icon": "/icon.svg"`) — the plugin's marketplace/toolbar icon. No image
pipeline, no CDN, no `vite-imagetools` or similar. Any new static asset goes
in `public/` and is referenced by its root-relative path.

## 5. Icon System

None beyond the one plugin icon above. The panel UI (`App.tsx`) uses no icons
— only text and native `<input type="checkbox">`/`<button>` elements styled by
`framer.css`. If a Figma design specifies icons for the panel, they'd need to
be added as new SVGs (inline or in `public/`) — there is no existing
convention to follow, so ask before picking one (inline `<svg>` vs `public/`
file vs a library like `lucide-react`).

## 6. Styling Approach

- Global stylesheet per component: `src/App.css`, imported directly in
  `src/App.tsx` (`import "./App.css"`). No scoping mechanism — class names are
  plain and must stay unique by convention (`.intro`, `.toggle`, `.summary`,
  `.row`, `.errors`, `.actions`).
- Layout is flexbox throughout (`display: flex`), no CSS Grid in use.
- No responsive breakpoints — the plugin panel has a **fixed size** set
  programmatically in `App.tsx`:

  ```ts
  framer.showUI({ position: "top right", width: 300, height: 500 })
  ```

  Any new UI must fit this 300×500 panel; don't design for other viewport
  sizes.
- Framer's built-in utility classes (e.g. `framer-button-primary`) are used
  directly on native elements rather than wrapped in a custom `<Button>`
  component — follow that pattern for form controls rather than building a
  component wrapper.

## 7. Project Structure

```
src/
  main.tsx       # entrypoint: mounts <App/>, imports framer.css
  App.tsx        # the entire UI — one screen, no routing
  App.css        # the entire stylesheet
  snapshot.ts    # all data reads + the exported JSON shape (no UI)
  vite-env.d.ts  # Vite ambient types
public/
  icon.svg       # plugin icon referenced by framer.json
framer.json      # plugin id/name/mode metadata (Framer, not Vite)
```

There is no `components/`, `hooks/`, `lib/`, or `styles/` directory — adding
one for a single new piece of UI would be over-structuring for this project's
size. Keep new code in `App.tsx`/`App.css` unless a second screen is
introduced.

## Figma MCP workflow for this repo specifically

- Confirm the Figma file/frame actually corresponds to *this plugin's panel*
  before pulling `get_design_context` — most Figma work referenced in this
  workspace (e.g. MADK 2026 event assets) has no code target here at all and
  should be built directly in Figma via `use_figma`, not translated to a
  component in this repo.
- When a design genuinely is this panel's UI: map colors to the nearest
  existing `--framer-color-*` variable rather than hardcoding hex from Figma;
  flag to the user any color with no matching variable instead of inventing
  a new custom property.
- Panel size is fixed at 300×500 (`framer.showUI`) — a Figma frame at any
  other size needs explicit confirmation on how to adapt, not silent scaling.
