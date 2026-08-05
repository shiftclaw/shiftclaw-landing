import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => ReactNode)
}

export interface SiteConfig {
  name: string
  logo?: ReactNode
  navLinks: NavLink[]
  socials: SocialLink[]
}

export interface HeroProps {
  badge?: string
  badgeIcon?: LucideIcon
  headline: string
  subheadline: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  visual?: ReactNode
}

export interface StatItem {
  value: string
  label: string
}

export interface SocialProofProps {
  heading?: string
  stats: StatItem[]
  logos?: {
    src: string
    alt: string
  }[]
}

export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
  href?: string
  ctaLabel?: string
}

export interface FeaturesProps {
  badge?: string
  heading: string
  subheading?: string
  items: FeatureItem[]
  columns?: 2 | 3
}

export interface PricingTier {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  lifetimePrice?: number
  features: string[]
  highlighted?: boolean
  ctaLabel: string
  ctaHref: string
}

export interface PricingProps {
  badge?: string
  heading: string
  subheading?: string
  tiers: PricingTier[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQProps {
  heading: string
  subheading?: string
  items: FAQItem[]
  ctaCard?: {
    heading: string
    description: string
    ctaLabel: string
    ctaHref: string
  }
}

export interface FooterColumn {
  title: string
  links: {
    label: string
    href: string
  }[]
}

export interface FooterProps {
  logo?: ReactNode
  name: string
  columns: FooterColumn[]
  socials: SocialLink[]
  copyright: string
  newsletter?: {
    heading: string
    placeholder: string
  }
}
