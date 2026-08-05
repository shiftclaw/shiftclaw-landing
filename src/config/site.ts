import {
  Bot,
  Users,
  FileText,
  Zap,
  Github,
  Mail,
} from "lucide-react"
import { XIcon } from "@/components/icons/x-icon"
import type {
  SiteConfig,
  HeroProps,
  SocialProofProps,
  FeaturesProps,
  FAQProps,
  FooterProps,
} from "@/types/landing"

export const siteConfig: SiteConfig = {
  name: "ShiftClaw",
  navLinks: [
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "X (Twitter)", href: "https://x.com/shiftclaw", icon: XIcon },
    {
      label: "GitHub",
      href: "https://github.com/shiftclaw",
      icon: Github,
    },
  ],
}

export const heroConfig: HeroProps = {
  badge: "Human + AI indie studio",
  badgeIcon: Bot,
  headline: "Tools that ship fast",
  subheadline:
    "We build SaaS products that solve real problems. One founder, a team of AI agents, zero bureaucracy.",
  primaryCTA: {
    label: "See our products",
    href: "#products",
  },
}

export const socialProofConfig: SocialProofProps = {
  stats: [
    { value: "1", label: "Human" },
    { value: "6", label: "AI Agents" },
    { value: "\u221E", label: "Potential" },
  ],
}

export const productsConfig: FeaturesProps = {
  badge: "Products",
  heading: "What we build",
  subheading: "Built to solve real problems, priced for real teams.",
  items: [
    {
      icon: Users,
      title: "RetroShift",
      description:
        "Async retrospectives with anonymous voting, AI-powered summaries, multi-language support (EN/IT), and a Pro tier with advanced features.",
      badge: "Live",
      href: "https://retroshift.vercel.app",
      ctaLabel: "Try it free",
    },
    {
      icon: FileText,
      title: "MeetingZero",
      description:
        "Kill unnecessary meetings. AI-powered async standups, decisions, and updates that keep your team aligned without the calendar bloat.",
      badge: "In Development",
    },
    {
      icon: Zap,
      title: "Next Project",
      description:
        "We're always building. Follow us to be the first to know about our next tool.",
      badge: "Coming Soon",
    },
  ],
  columns: 3,
}

export const aboutFaqConfig: FAQProps = {
  heading: "About ShiftClaw",
  items: [
    {
      question: "Who is behind ShiftClaw?",
      answer:
        "ShiftClaw is an indie studio run by Dodo, a software engineer with a decade of experience building products, and Claw, an AI agent leading a team of specialized AI agents \u2014 each focused on development, QA, marketing, UX, and DevOps.",
    },
    {
      question: "What's your philosophy?",
      answer:
        "We believe great software doesn't need big teams. With the right tools and relentless focus, a small team can outship anyone. We build tools we'd use ourselves, price them fairly, and ship fast.",
    },
    {
      question: "How do you use AI?",
      answer:
        "Every part of our process is AI-augmented. From product design to coding, testing, deployment, and support \u2014 our AI agents handle specialized tasks while the human focuses on vision and quality.",
    },
    {
      question: "Can I contribute or collaborate?",
      answer:
        "We're always open to feedback and ideas. Reach out via email or find us on GitHub to connect with us.",
    },
  ],
  ctaCard: {
    heading: "Get in touch",
    description: "Questions, feedback, or just want to say hi?",
    ctaLabel: "Email us",
    ctaHref: "mailto:shiftclawco@gmail.com",
  },
}

export const footerConfig: FooterProps = {
  name: "ShiftClaw",
  columns: [
    {
      title: "Products",
      links: [
        {
          label: "RetroShift",
          href: "https://retroshift.vercel.app",
        },
        { label: "MeetingZero", href: "#products" },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/shiftclaw",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
  socials: [
    { label: "X (Twitter)", href: "https://x.com/shiftclaw", icon: XIcon },
    {
      label: "GitHub",
      href: "https://github.com/shiftclaw",
      icon: Github,
    },
    {
      label: "Email",
      href: "mailto:shiftclawco@gmail.com",
      icon: Mail,
    },
  ],
  copyright: `\u00A9 ${new Date().getFullYear()} ShiftClawCO. All rights reserved.`,
}
