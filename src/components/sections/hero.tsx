import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { HeroProps } from "@/types/landing"

export function Hero({
  badge,
  badgeIcon: BadgeIcon,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  visual,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-24 md:py-32">
      <div className="container mx-auto px-6 text-center lg:px-8">
        {badge && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm">
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
        {visual && <div className="mt-16">{visual}</div>}
      </div>
    </section>
  )
}
