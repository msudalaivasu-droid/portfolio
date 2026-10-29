import { Code2, BrainCircuit, BarChart3, Sprout } from 'lucide-react'
import { about, profile, skillGroups } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Section } from './section'

const groupIcons = [Code2, BrainCircuit, BarChart3, Sprout]

export function About() {
  return (
    <Section id="about" title="Data, models and the pipelines between them.">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-pretty text-foreground/85 md:text-xl md:leading-relaxed">
            {about}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <dl className="grid gap-px overflow-hidden rounded-xl border bg-border">
            {[
              ['Focus', 'Analytics Engineering'],
              ['Degree', 'B.Tech, AI & Data Science'],
              ['Location', profile.location],
            ].map(([term, detail]) => (
              <div key={term} className="flex flex-col gap-1 bg-card px-5 py-4">
                <dt className="text-sm text-muted-foreground">
                  {term}
                </dt>
                <dd className="font-medium text-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <div className="border-y bg-card/60">
      <Section id="skills" title="Toolkit">
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i] ?? Code2
            return (
              <Reveal key={group.title} delay={i * 80}>
                <div
                  className={cn(
                    'flex h-full flex-col gap-5 rounded-xl border bg-background p-6',
                    group.learning && 'border-dashed border-highlight/50',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'flex size-9 items-center justify-center rounded-lg',
                        group.learning
                          ? 'bg-highlight/10 text-highlight'
                          : 'bg-secondary text-primary',
                      )}
                    >
                      <Icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                    {group.items.map((item) => (
                      <li key={item}>
                        <Badge
                          variant={group.learning ? 'outline' : 'secondary'}
                          className="h-7 px-3 text-sm"
                        >
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
