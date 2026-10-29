'use client'

import { useState } from 'react'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { emailLinks, profile } from '@/lib/portfolio-data'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(textarea)
    return ok
  }
}

function useCopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    if (await copyText(profile.email)) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    }
  }
  return { copied, copy }
}

export function ContactEmailActions() {
  const { copied, copy } = useCopyEmail()

  return (
    <div className="flex flex-col gap-3 sm:items-end">
      <div className="flex flex-wrap gap-2">
        <a
          href={emailLinks.gmail}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'h-12 px-6 text-base')}
        >
          <Mail data-icon="inline-start" />
          Email me
          <span className="sr-only">(opens Gmail in a new tab)</span>
        </a>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={copy}
          className="h-12 border-primary-foreground/30 bg-transparent px-5 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          {copied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
          {copied ? 'Copied' : 'Copy email'}
        </Button>
        <a
          href={profile.resume}
          download="Sudalai_M_Resume.pdf"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'h-12 border-primary-foreground/30 bg-transparent px-5 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
          )}
        >
          <Download data-icon="inline-start" />
          Download resume
        </a>
      </div>
      <a
        href={emailLinks.mailto}
        className="w-fit rounded-sm text-sm underline-offset-4 opacity-75 hover:underline hover:opacity-100"
      >
        Or open in your mail app
      </a>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  )
}

export function HeroEmailButton() {
  return (
    <a
      href={emailLinks.gmail}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Email ${profile.email} (opens Gmail in a new tab)`}
      title={profile.email}
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'size-11')}
    >
      <Mail className="size-5" />
    </a>
  )
}
