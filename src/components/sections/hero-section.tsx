"use client"

import { HeroVisual } from "./hero-visual"
import { AppMockup } from "./app-mockup"
import { heroConfig } from "@/config/site"

interface HeroSectionProps {
  mockupTitle?: string
}

export function HeroSection({ mockupTitle }: HeroSectionProps) {
  return (
    <HeroVisual {...heroConfig}>
      <AppMockup title={mockupTitle} />
    </HeroVisual>
  )
}
