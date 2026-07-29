import { framer } from "@framer/plugin"

/**
 * A read-only export of everything the Plugin API exposes about the open
 * project. Written to be pasted into a chat or committed to the repo, so it
 * stays plain JSON with no class instances or circular references.
 */
export interface Snapshot {
  capturedAt: string
  project: { id: string; name: string }
  publish: {
    production: PublishTarget | null
    staging: PublishTarget | null
  }
  pages: Page[]
  components: NamedNode[]
  collections: CollectionSummary[]
  codeFiles: CodeFileSummary[]
  colorStyles: ColorStyleSummary[]
  textStyles: TextStyleSummary[]
  redirects: RedirectSummary[]
  locales: LocaleSummary[]
  /** Anything the API refused to hand over, so gaps are visible not silent. */
  errors: string[]
}

interface PublishTarget {
  url: string
  deploymentTime: number
}

interface Page {
  id: string
  /** WebPageNode exposes no name — the path is its identity. */
  path: string | null
  /** Set when the page is a CMS template rendering a collection. */
  collectionId: string | null
}

interface NamedNode {
  id: string
  name: string | null
}

interface CollectionSummary {
  id: string
  name: string
  slugFieldName: string | null
  managedBy: string
  itemCount: number
  fields: { id: string; name: string; type: string }[]
}

interface CodeFileSummary {
  id: string
  name: string
  path: string
  exports: string[]
  lineCount: number
  /** Only populated when `includeCode` is requested. */
  content?: string
}

interface ColorStyleSummary {
  id: string
  name: string
  path: string
  light: string
  dark: string | null
}

interface TextStyleSummary {
  id: string
  name: string
  path: string
  tag: string
}

interface RedirectSummary {
  id: string
  from: string
  to: string | null
}

interface LocaleSummary {
  id: string
  code: string
  name: string
}

export interface SnapshotOptions {
  /** Include full source of every code file. Off by default — it gets large. */
  includeCode: boolean
}

/**
 * Runs each section independently: one unsupported call on the user's plan or
 * permission level shouldn't cost them the whole snapshot.
 */
async function section<T>(
  label: string,
  errors: string[],
  read: () => Promise<T>,
  fallback: T,
): Promise<T> {
  try {
    return await read()
  } catch (error) {
    errors.push(`${label}: ${error instanceof Error ? error.message : String(error)}`)
    return fallback
  }
}

export async function collectSnapshot({ includeCode }: SnapshotOptions): Promise<Snapshot> {
  const errors: string[] = []

  const project = await section("project", errors, () => framer.getProjectInfo(), {
    id: "unknown",
    name: "unknown",
    apiVersion1Id: "unknown",
  })

  const publishInfo = await section("publish", errors, () => framer.getPublishInfo(), {
    production: null,
    staging: null,
  })

  const pages = await section<Page[]>("pages", errors, async () => {
    const nodes = await framer.getNodesWithType("WebPageNode")
    return nodes.map(node => ({
      id: node.id,
      path: node.path ?? null,
      collectionId: node.collectionId ?? null,
    }))
  }, [])

  const components = await section<NamedNode[]>("components", errors, async () => {
    const nodes = await framer.getNodesWithType("ComponentNode")
    return nodes.map(node => ({ id: node.id, name: node.name }))
  }, [])

  const collections = await section<CollectionSummary[]>("collections", errors, async () => {
    const found = await framer.getCollections()
    return Promise.all(
      found.map(async collection => {
        const [fields, items] = await Promise.all([
          collection.getFields(),
          collection.getItems(),
        ])
        return {
          id: collection.id,
          name: collection.name,
          slugFieldName: collection.slugFieldName,
          managedBy: collection.managedBy,
          itemCount: items.length,
          fields: fields.map(field => ({
            id: field.id,
            name: field.name,
            type: field.type,
          })),
        }
      }),
    )
  }, [])

  const codeFiles = await section<CodeFileSummary[]>("codeFiles", errors, async () => {
    const files = await framer.getCodeFiles()
    return files.map(file => ({
      id: file.id,
      name: file.name,
      path: file.path,
      exports: file.exports.map(entry => entry.name),
      lineCount: file.content.split("\n").length,
      ...(includeCode ? { content: file.content } : {}),
    }))
  }, [])

  const colorStyles = await section<ColorStyleSummary[]>("colorStyles", errors, async () => {
    const styles = await framer.getColorStyles()
    return styles.map(style => ({
      id: style.id,
      name: style.name,
      path: style.path,
      light: style.light,
      dark: style.dark,
    }))
  }, [])

  const textStyles = await section<TextStyleSummary[]>("textStyles", errors, async () => {
    const styles = await framer.getTextStyles()
    return styles.map(style => ({
      id: style.id,
      name: style.name,
      path: style.path,
      tag: style.tag,
    }))
  }, [])

  const redirects = await section<RedirectSummary[]>("redirects", errors, async () => {
    const found = await framer.getRedirects()
    return found.map(redirect => ({
      id: redirect.id,
      from: redirect.from,
      to: redirect.to,
    }))
  }, [])

  const locales = await section<LocaleSummary[]>("locales", errors, async () => {
    const found = await framer.getLocales()
    return found.map(locale => ({
      id: locale.id,
      code: locale.code,
      name: locale.name,
    }))
  }, [])

  return {
    capturedAt: new Date().toISOString(),
    project: { id: project.id, name: project.name },
    publish: {
      production: toPublishTarget(publishInfo.production),
      staging: toPublishTarget(publishInfo.staging),
    },
    pages,
    components,
    collections,
    codeFiles,
    colorStyles,
    textStyles,
    redirects,
    locales,
    errors,
  }
}

function toPublishTarget(
  publish: { url: string; deploymentTime: number } | null,
): PublishTarget | null {
  if (!publish) return null
  return { url: publish.url, deploymentTime: publish.deploymentTime }
}

export function snapshotFilename(snapshot: Snapshot): string {
  const slug = snapshot.project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  const date = snapshot.capturedAt.slice(0, 10)
  return `${slug || "framer-project"}-${date}.json`
}
