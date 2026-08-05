import type { SocialProofProps } from "@/types/landing"

export function SocialProof({ heading, stats, logos }: SocialProofProps) {
  return (
    <section className="border-y border-border/50 py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {heading && (
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {heading}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        {logos && logos.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-8 opacity-50 grayscale transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
