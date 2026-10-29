'use client'

import { useEffect, useState } from 'react'
import type { Metric } from '@/lib/portfolio-data'
import { useInView } from './reveal'

const format = (n: number, decimals: number) =>
  n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

export function AnimatedCounter({ metric }: { metric: Metric }) {
  const { value, decimals = 0, prefix = '', suffix = '' } = metric
  const { ref, inView } = useInView<HTMLSpanElement>(0.4)
  // Start at the final value so server-rendered / no-JS output is correct.
  const [current, setCurrent] = useState(value)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(value)
      return
    }
    const duration = 1600
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCurrent(value * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  const finalText = `${prefix}${format(value, decimals)}${suffix}`

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {prefix}
        {format(current, decimals)}
        {suffix}
      </span>
      <span className="sr-only">{finalText}</span>
    </span>
  )
}
