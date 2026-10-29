import { ArrowUpRight, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { ContactEmailActions } from './email-actions'
import { Reveal } from './reveal'
import { Section } from './section'

const links = [
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: 'LinkedIn', value: 'sudalai-m-345657332', href: profile.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', value: 'msudalaivasu-droid', href: profile.github, icon: GithubIcon },
]

export function Contact() {
  return (
    <Section id="contact" title="Let's talk data.">
      <Reveal>
        <div className="flex flex-col gap-10 rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <p className="max-w-md text-lg leading-relaxed text-pretty opacity-85">
                Open to internships and entry-level Analytics Engineering roles. The fastest way to reach me is email.
              </p>
              <p className="text-xl font-semibold break-all md:text-2xl">{profile.email}</p>
            </div>
            <ContactEmailActions />
          </div>

          <ul className="grid gap-px overflow-hidden rounded-xl bg-primary-foreground/15 sm:grid-cols-3">
            {links.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="bg-primary">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 p-5 transition-colors hover:bg-primary-foreground/10 focus-visible:bg-primary-foreground/10 focus-visible:outline-none"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Icon className="size-5 shrink-0 opacity-80" aria-hidden="true" />
                    <span className="flex min-w-0 flex-col">
                      <span className="text-sm opacity-75">{label}</span>
                      <span className="truncate font-medium">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row md:px-8">
        <p>&copy; {profile.name}</p>
        <a href="#top" className="rounded-sm hover:text-primary">
          Back to top
        </a>
      </div>
    </footer>
  )
}
