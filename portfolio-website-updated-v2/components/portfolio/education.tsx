import { Award, GraduationCap, Languages } from 'lucide-react'
import { certification, education, languages } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { Section } from './section'

export function Education() {
  return (
    <div className="border-y bg-card/60">
      <Section id="education" title="Education & credentials">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <ol className="relative flex flex-col gap-10 border-l-2 border-border pl-8 md:pl-10">
            {education.map((item, i) => (
              <li key={item.title} className="relative">
                <Reveal delay={i * 120}>
                  <span
                    aria-hidden="true"
                    className="absolute top-1 -left-[2.6rem] flex size-6 items-center justify-center rounded-full border-2 border-primary bg-background md:-left-[3.1rem]"
                  >
                    <span className="size-2 rounded-full bg-primary" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-highlight tabular-nums">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-semibold text-balance text-foreground md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="mt-1 w-fit rounded-md bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground">
                      {item.score}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-4">
            <Reveal>
              <InfoCard icon={Award} heading="Certification">
                <p className="font-semibold text-foreground">{certification.title}</p>
                <p className="text-sm text-muted-foreground">{certification.issuer}</p>
                <p className="text-sm text-muted-foreground">{certification.period}</p>
              </InfoCard>
            </Reveal>
            <Reveal delay={100}>
              <InfoCard icon={Languages} heading="Languages">
                <ul className="flex flex-col gap-3">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex flex-col gap-0.5">
                      <p className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-semibold text-foreground">{lang.name}</span>
                        <span className="text-sm text-highlight">{lang.level}</span>
                      </p>
                      {lang.detail && (
                        <p className="text-sm text-muted-foreground">{lang.detail}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  )
}

function InfoCard({
  icon: Icon = GraduationCap,
  heading,
  children,
}: {
  icon?: typeof GraduationCap
  heading: string
  children: React.ReactNode
}) {
  return (
    <section
      aria-label={heading}
      className="flex flex-col gap-4 rounded-xl border bg-background p-6"
    >
      <h3 className="flex items-center gap-2.5 text-sm font-semibold text-muted-foreground">
        <Icon className="size-4 text-primary" aria-hidden="true" />
        {heading}
      </h3>
      <div className="flex flex-col gap-1">{children}</div>
    </section>
  )
}
