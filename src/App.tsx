import { framer } from "@framer/plugin"
import { useState } from "react"
import { collectSnapshot, snapshotFilename, type Snapshot } from "./snapshot"
import "./App.css"

framer.showUI({
  position: "top right",
  width: 300,
  height: 500,
})

export function App() {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null)
  const [isReading, setIsReading] = useState(false)
  const [includeCode, setIncludeCode] = useState(false)

  const handleRead = async () => {
    setIsReading(true)
    try {
      const result = await collectSnapshot({ includeCode })
      setSnapshot(result)
      if (result.errors.length > 0) {
        framer.notify(`Read with ${result.errors.length} gap(s) — see below.`, {
          variant: "warning",
        })
      } else {
        framer.notify("Project read.", { variant: "success" })
      }
    } catch (error) {
      framer.notify(error instanceof Error ? error.message : "Could not read the project.", {
        variant: "error",
      })
    } finally {
      setIsReading(false)
    }
  }

  const handleCopy = async () => {
    if (!snapshot) return
    try {
      await navigator.clipboard.writeText(JSON.stringify(snapshot, null, 2))
      framer.notify("JSON copied. Paste it into the chat.", { variant: "success" })
    } catch {
      framer.notify("Clipboard blocked — use Download instead.", { variant: "error" })
    }
  }

  const handleDownload = () => {
    if (!snapshot) return
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = snapshotFilename(snapshot)
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main>
      <p className="intro">
        Reads the open project and exports it as JSON — pages, CMS collections, code files and
        styles. Nothing is modified.
      </p>

      <label className="toggle">
        <input
          type="checkbox"
          checked={includeCode}
          onChange={event => setIncludeCode(event.target.checked)}
        />
        Include code file contents
      </label>

      <button className="framer-button-primary" onClick={handleRead} disabled={isReading}>
        {isReading ? "Reading…" : "Read project"}
      </button>

      {snapshot && (
        <>
          <div className="summary">
            <Row label="Project" value={snapshot.project.name} />
            <Row
              label="Published"
              value={snapshot.publish.production ? hostOf(snapshot.publish.production.url) : "no"}
            />
            <Row label="Pages" value={snapshot.pages.length} />
            <Row label="Components" value={snapshot.components.length} />
            <Row label="Collections" value={snapshot.collections.length} />
            <Row label="CMS items" value={totalItems(snapshot)} />
            <Row label="Code files" value={snapshot.codeFiles.length} />
            <Row label="Color styles" value={snapshot.colorStyles.length} />
            <Row label="Text styles" value={snapshot.textStyles.length} />
            <Row label="Redirects" value={snapshot.redirects.length} />
            <Row label="Locales" value={snapshot.locales.length} />
          </div>

          {snapshot.errors.length > 0 && (
            <div className="errors">
              <strong>Not readable</strong>
              {snapshot.errors.map(error => (
                <span key={error}>{error}</span>
              ))}
            </div>
          )}

          <div className="actions">
            <button onClick={handleCopy}>Copy JSON</button>
            <button onClick={handleDownload}>Download</button>
          </div>
        </>
      )}
    </main>
  )
}

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="row">
      <span className="row-label">{label}</span>
      <span className="row-value">{value}</span>
    </div>
  )
}

function totalItems(snapshot: Snapshot): number {
  return snapshot.collections.reduce((total, collection) => total + collection.itemCount, 0)
}

function hostOf(url: string): string {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}
