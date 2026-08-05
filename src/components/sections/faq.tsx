"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FAQProps } from "@/types/landing"

export function FAQ({ heading, subheading, items, ctaCard }: FAQProps) {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-lg text-muted-foreground">{subheading}</p>
          )}
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-[1fr_300px]">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {ctaCard && (
            <div className="hidden lg:block">
              <div className="sticky top-24 rounded-xl border border-border/50 bg-card p-6">
                <h3 className="text-lg font-semibold">{ctaCard.heading}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {ctaCard.description}
                </p>
                <Button className="mt-4 w-full" asChild>
                  <a href={ctaCard.ctaHref}>
                    {ctaCard.ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
