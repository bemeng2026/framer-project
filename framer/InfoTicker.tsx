import type { CSSProperties } from "react"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

type Props = {
    prefix: string
    words: string[]
    interval: number
    align: string
    collapsed: boolean
    collapseOnHover: boolean
    font?: CSSProperties
    color: string
    accentColor: string
    useGradient: boolean
    colorA: string
    colorB: string
    angle: number
}

/** Framer renders code components on the server when publishing, where
 *  useLayoutEffect warns. Fall back to useEffect there. */
const useMeasure = typeof document === "undefined" ? useEffect : useLayoutEffect

const move = { duration: 0.4, ease: [0.4, 0, 0.2, 1] } as const

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 240
 * @framerIntrinsicHeight 32
 */
export default function InfoTicker({
    prefix = "Informasi",
    words = ["Mahasiswa", "Internal", "Eksternal", "#FTAntiKS"],
    interval = 2600,
    align = "center",
    collapsed = false,
    collapseOnHover = true,
    font,
    color = "#FFFFFF",
    accentColor = "#FFE600",
    useGradient = false,
    colorA = "#FFFFFF",
    colorB = "#FFE600",
    angle = 90,
}: Props) {
    const list = words.length ? words : [""]
    const [index, setIndex] = useState(0)
    const [hover, setHover] = useState(false)
    const [line, setLine] = useState(0)
    const [width, setWidth] = useState(0)

    const prefixRef = useRef<HTMLSpanElement>(null)
    const ghostRef = useRef<HTMLSpanElement>(null)

    const word = list[index % list.length]
    const isTag = word.trim().startsWith("#")
    const shrink = collapsed || (collapseOnHover && hover)
    const measured = line > 0

    const paint = (solid: string): CSSProperties =>
        useGradient
            ? {
                  backgroundImage: `linear-gradient(${angle}deg, ${colorA}, ${colorB})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
              }
            : { color: solid }

    /**
     * Baseline alignment cannot carry this layout: the sliding word lives in a
     * box with overflow: hidden, and an inline-block with overflow other than
     * visible takes its *bottom margin edge* as its baseline (CSS 2.1 10.8.1),
     * which lifts the word above the prefix. So both halves are given the same
     * box height and the same line-height instead — identical half-leading on
     * identical boxes puts the two baselines on the same line by construction.
     */
    const box: CSSProperties = measured
        ? { height: line, lineHeight: `${line}px` }
        : {}

    useMeasure(() => {
        const read = () => {
            if (prefixRef.current)
                setLine(prefixRef.current.getBoundingClientRect().height)
            if (ghostRef.current)
                setWidth(
                    Math.ceil(ghostRef.current.getBoundingClientRect().width) + 1
                )
        }
        read()
        if (typeof ResizeObserver === "undefined") return
        // Covers everything that changes the metrics after this pass: a new
        // word, an edited font, and the webfont Framer swaps in after first
        // paint — which is what leaves the first measurement short otherwise.
        const observer = new ResizeObserver(read)
        if (prefixRef.current) observer.observe(prefixRef.current)
        if (ghostRef.current) observer.observe(ghostRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (shrink || list.length < 2) return
        const id = setInterval(
            () => setIndex((i) => i + 1),
            Math.max(800, interval)
        )
        return () => clearInterval(id)
    }, [shrink, list.length, interval])

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: align,
                whiteSpace: "nowrap",
                color,
                ...font,
            }}
        >
            <span
                ref={prefixRef}
                style={{
                    flex: "0 0 auto",
                    whiteSpace: "pre",
                    ...font,
                    ...box,
                    ...paint(color),
                }}
            >
                {prefix}
            </span>

            <motion.span
                initial={false}
                animate={
                    measured
                        ? { width: shrink ? 0 : width, opacity: shrink ? 0 : 1 }
                        : { opacity: 1 }
                }
                transition={move}
                style={{
                    position: "relative",
                    flex: "0 0 auto",
                    overflow: "hidden",
                    ...box,
                }}
            >
                {/* In flow, so the box is the right width on the very first
                    paint — before the measurement lands. */}
                <span
                    ref={ghostRef}
                    aria-hidden
                    style={{
                        display: "inline-block",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        ...font,
                        ...box,
                    }}
                >
                    {"\u00A0"}
                    {word}
                </span>

                <AnimatePresence initial={false}>
                    <motion.span
                        key={index}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={move}
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            whiteSpace: "pre",
                            ...font,
                            ...box,
                            ...paint(isTag ? accentColor : color),
                        }}
                    >
                        {"\u00A0"}
                        {word}
                    </motion.span>
                </AnimatePresence>
            </motion.span>
        </div>
    )
}

addPropertyControls(InfoTicker, {
    prefix: {
        type: ControlType.String,
        title: "Prefix",
        defaultValue: "Informasi",
    },
    words: {
        type: ControlType.Array,
        title: "Kata",
        control: { type: ControlType.String },
        defaultValue: ["Mahasiswa", "Internal", "Eksternal", "#FTAntiKS"],
    },
    interval: {
        type: ControlType.Number,
        title: "Jeda",
        defaultValue: 2600,
        min: 800,
        max: 8000,
        step: 100,
        unit: "ms",
    },
    align: {
        type: ControlType.Enum,
        title: "Rata",
        options: ["flex-start", "center", "flex-end"],
        optionTitles: ["Kiri", "Tengah", "Kanan"],
        defaultValue: "center",
    },
    collapseOnHover: {
        type: ControlType.Boolean,
        title: "Ringkas saat hover",
        defaultValue: true,
    },
    collapsed: {
        type: ControlType.Boolean,
        title: "Paksa ringkas",
        defaultValue: false,
    },
    font: {
        type: ControlType.Font,
        title: "Font",
        controls: "extended",
        defaultFontType: "sans",
        defaultValue: { fontSize: 17, variant: "SemiBold", lineHeight: 1.4 },
    },
    useGradient: {
        type: ControlType.Boolean,
        title: "Gradient",
        defaultValue: false,
    },
    colorA: {
        type: ControlType.Color,
        title: "Gradient 1",
        defaultValue: "#FFFFFF",
        hidden: (p) => !p.useGradient,
    },
    colorB: {
        type: ControlType.Color,
        title: "Gradient 2",
        defaultValue: "#FFE600",
        hidden: (p) => !p.useGradient,
    },
    angle: {
        type: ControlType.Number,
        title: "Sudut",
        defaultValue: 90,
        min: 0,
        max: 360,
        step: 5,
        unit: "°",
        hidden: (p) => !p.useGradient,
    },
    color: {
        type: ControlType.Color,
        title: "Warna",
        defaultValue: "#FFFFFF",
        hidden: (p) => p.useGradient,
    },
    accentColor: {
        type: ControlType.Color,
        title: "Aksen tagar",
        defaultValue: "#FFE600",
        hidden: (p) => p.useGradient,
    },
})
