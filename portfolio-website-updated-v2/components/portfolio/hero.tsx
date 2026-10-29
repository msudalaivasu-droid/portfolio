import Image from 'next/image'
import { ArrowDown, FileText, MapPin } from 'lucide-react'
import { HeroEmailButton } from './email-actions'
import { profile } from '@/lib/portfolio-data'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { Reveal } from './reveal'

const SHOW_PROFILE_PHOTO = true

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden border-b"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_65%)] opacity-70"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-20 md:grid-cols-[1fr_auto] md:items-center md:px-8 md:pt-24 md:pb-28">
        <Reveal className="flex flex-col gap-7">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-highlight" />
            </span>
            Open to internships and entry-level Analytics Engineering roles
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-semibold tracking-tight text-primary sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="text-lg font-medium text-foreground sm:text-xl">
              {profile.title}
              <span className="mx-2 text-muted-foreground" aria-hidden="true">
                |
              </span>
              <span className="text-muted-foreground">{profile.subtitle}</span>
            </p>
            <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {profile.pitch}
            </p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#project" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}>
              View Project
              <ArrowDown data-icon="inline-end" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5')}
            >
              <FileText data-icon="inline-start" />
              View Resume
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
            <div className="flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
                className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'size-11')}
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
                className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'size-11')}
              >
                <LinkedinIcon className="size-5" />
              </a>
              <HeroEmailButton />
            </div>
          </div>
        </Reveal>

        {SHOW_PROFILE_PHOTO && (
          <Reveal delay={150} className="order-first md:order-none">
            <div className="relative size-28 md:size-64">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full border border-dashed border-highlight/40"
              />
              <Image
                src="/images/sudalai.jpg"
                alt={`Portrait of ${profile.name}`}
                width={512}
                height={512}
                priority
                sizes="(min-width: 768px) 256px, 112px"
                className="relative size-full rounded-full bg-muted object-cover shadow-xl shadow-primary/20"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
