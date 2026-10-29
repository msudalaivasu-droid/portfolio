import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function Section({
  id,
  title,
  children,
  className,
}: {
  id: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28', className)}
    >
      <Reveal className="mb-10 md:mb-14">
        <h2
          id={`${id}-title`}
          className="text-3xl font-semibold tracking-tight text-balance text-primary md:text-4xl"
        >
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}
