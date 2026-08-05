import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { FeaturesProps } from "@/types/landing"

export function Features({
  badge,
  heading,
  subheading,
  items,
  columns = 3,
}: FeaturesProps) {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <Badge variant="secondary" className="mb-4">
              {badge}
            </Badge>
          )}
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-lg text-muted-foreground">{subheading}</p>
          )}
        </div>
        <div
          className={cn(
            "mx-auto mt-16 grid max-w-5xl gap-6",
            columns === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-border hover:shadow-md"
              >
                {item.badge && (
                  <div className="absolute right-3 top-3">
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  </div>
                )}
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.ctaLabel ?? "Learn more"}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
