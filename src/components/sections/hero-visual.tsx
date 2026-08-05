"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { HeroProps } from "@/types/landing"

interface HeroVisualProps extends HeroProps {
  /** The visual content shown behind the hero (e.g. app mockup), passed as children */
  children: React.ReactNode
  className?: string
}

export function HeroVisual({
  badge,
  badgeIcon: BadgeIcon,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  children,
  className,
}: HeroVisualProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight
      const scrolled = -rect.top
      const scrollRange = containerHeight - viewportHeight
      const p = Math.max(0, Math.min(1, scrolled / scrollRange))
      setProgress(p)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // clip-path: from ~38% inset (small card) to 2% (near-fullscreen)
  const insetX = 2 + 36 * (1 - progress)
  const insetY = 2 + 36 * (1 - progress)
  const borderRadius = 24 * (1 - progress)

  // Hero text fades out and moves up in first 40% of scroll
  const textProgress = Math.min(1, progress / 0.4)
  const textOpacity = 1 - textProgress
  const textTranslateY = -60 * textProgress
  const textScale = 1 + 0.08 * textProgress

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        {/* Background visual with expanding clip-path */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(${insetY}% ${insetX}% round ${borderRadius}px)`,
          }}
        >
          {children}
          {/* Dark overlay that hides the mockup while text is visible */}
          <div
            className="absolute inset-0 bg-background"
            style={{ opacity: Math.min(1, textOpacity * 1.5) }}
          />
        </div>

        {/* Hero text overlay — fades out on scroll */}
        <div
          className="relative z-10 flex h-full items-center justify-center"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px) scale(${textScale})`,
            pointerEvents: textOpacity < 0.3 ? "none" : "auto",
          }}
        >
          <div className="container mx-auto px-6 text-center lg:px-8">
            {badge && (
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm">
                {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
                <span>{badge}</span>
              </div>
            )}
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {subheadline}
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href={primaryCTA.href}>
                  {primaryCTA.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {secondaryCTA && (
                <Button size="lg" variant="outline" asChild>
                  <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
                </Button>
              )}
            </div>

            {/* Scroll hint */}
            <div
              className="mt-16 text-sm text-muted-foreground"
              style={{ opacity: Math.max(0, 1 - progress * 5) }}
            >
              <p className="mb-2">Scroll to explore</p>
              <svg
                className="mx-auto h-5 w-5 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
