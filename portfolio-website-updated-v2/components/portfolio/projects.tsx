import { ArrowUpRight } from 'lucide-react'
import { plannedProjects, projects, type Project } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatedCounter } from './animated-counter'
import { GithubIcon } from './brand-icons'
import { Reveal } from './reveal'
import { Section } from './section'

export function Projects() {
  return (
    <Section id="project" title="Featured work">
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCaseStudy key={project.slug} project={project} />
        ))}
        <PlannedProjects />
      </div>
    </Section>
  )
}

function PlannedProjects() {
  if (plannedProjects.length === 0) return null
  return (
    <Reveal>
      <section aria-labelledby="in-progress-title" className="flex flex-col gap-4">
        <h3 id="in-progress-title" className="text-base font-semibold text-foreground">
          In progress
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {plannedProjects.map((item) => (
            <li
              key={item.title}
              className="flex items-center justify-between gap-4 rounded-xl border border-dashed bg-background p-5"
            >
              <span className="font-medium text-foreground">{item.title}</span>
              <Badge variant="outline">{item.status}</Badge>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}

function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <Reveal>
      <article
        aria-labelledby={`${project.slug}-title`}
        className="overflow-hidden rounded-2xl border bg-card"
      >
        <header className="flex flex-col gap-6 border-b p-6 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="flex flex-col gap-3">
            <h3
              id={`${project.slug}-title`}
              className="max-w-2xl text-2xl font-semibold tracking-tight text-balance text-primary md:text-3xl"
            >
              {project.title}
            </h3>
            <ul className="flex flex-wrap gap-2 pt-1" aria-label="Technologies used">
              {project.tech.map((t) => (
                <li key={t}>
                  <Badge variant="outline" className="bg-background">
                    {t}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: 'lg' }), 'h-11 w-fit px-5')}
            >
              <GithubIcon data-icon="inline-start" className="size-4" />
              View on GitHub
              <ArrowUpRight data-icon="inline-end" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 w-fit px-5')}
              >
                Live demo
                <ArrowUpRight data-icon="inline-end" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            )}
          </div>
        </header>

        <dl className="grid grid-cols-2 gap-px bg-border md:grid-cols-5">
          {project.metrics.map((m, i) => (
            <div
              key={m.label}
              className={cn(
                'flex flex-col gap-1 bg-background p-5 md:p-6',
                i === 0 && 'col-span-2 md:col-span-1',
              )}
            >
              <dt className="order-2 text-sm font-medium text-foreground">{m.label}</dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight text-primary md:text-[2rem]">
                <AnimatedCounter metric={m} />
              </dd>
              {m.note && <dd className="order-3 text-xs text-muted-foreground">{m.note}</dd>}
            </div>
          ))}
        </dl>

        <ol className="grid gap-px bg-border md:grid-cols-2">
          {project.star.map((step) => (
            <li key={step.label} className="flex gap-4 bg-card p-6 md:p-8">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground"
              >
                {step.label[0]}
              </span>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-semibold text-foreground">{step.label}</h4>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground md:text-[0.95rem]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </Reveal>
  )
}
