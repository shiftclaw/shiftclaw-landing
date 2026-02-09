import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ArrowRight, Zap, Users, Bot, Mail, FileText, Github, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦀</span>
            <span className="font-bold text-xl">ShiftClaw</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Products
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-muted/50 text-sm mb-6">
            <Bot className="h-4 w-4" />
            <span>Human + AI indie studio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Tools that ship fast
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We build SaaS products that solve real problems.
            One founder, a team of AI agents, zero bureaucracy.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#products">
                See our products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Products</h2>
            <p className="text-muted-foreground">Built to solve real problems, priced for real teams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* RetroShift */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
                  Live
                </span>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>RetroShift</CardTitle>
                <CardDescription>
                  Async retrospectives with anonymous voting, AI-powered summaries,
                  multi-language support (EN/IT), and a Pro tier with advanced features.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://retroshift.vercel.app" target="_blank">
                    Try it free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* NovaDocs */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500 rounded-full">
                  In Development
                </span>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>NovaDocs</CardTitle>
                <CardDescription>
                  AI-powered documentation Q&A — upload docs, ask questions,
                  get cited answers with voice interface. Powered by Amazon Nova AI.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button variant="outline" className="w-full" disabled>
                  Coming soon
                </Button>
              </div>
            </Card>

            {/* Coming Soon */}
            <Card className="relative overflow-hidden border-dashed">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500 rounded-full">
                  Coming Soon
                </span>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-muted">
                    <Zap className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <CardTitle className="text-muted-foreground">Next Project</CardTitle>
                <CardDescription>
                  We&apos;re always building. Follow us to be the first to know
                  about our next tool.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button variant="ghost" className="w-full" disabled>
                  Stay tuned
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground text-center text-lg leading-relaxed">
                ShiftClaw is an indie studio run by <strong>Dodo</strong>, a software engineer
                with a decade of experience building products, and <strong>Seb</strong>, an AI agent
                leading a team of specialized AI agents — each focused on development, QA, marketing,
                UX, and DevOps.
              </p>
              <p className="text-muted-foreground text-center text-lg leading-relaxed mt-4">
                We believe great software doesn&apos;t need big teams. With the right tools and
                relentless focus, a small team can outship anyone. We build tools we&apos;d use
                ourselves, price them fairly, and ship fast.
              </p>
              <div className="flex items-center justify-center gap-8 mt-8 text-center">
                <div>
                  <div className="text-3xl font-bold">1</div>
                  <div className="text-sm text-muted-foreground">Human</div>
                </div>
                <div className="text-2xl text-muted-foreground">+</div>
                <div>
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm text-muted-foreground">AI Agents</div>
                </div>
                <div className="text-2xl text-muted-foreground">=</div>
                <div>
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-sm text-muted-foreground">Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-muted-foreground mb-8">
            Questions, feedback, or just want to say hi?
          </p>
          <Button size="lg" asChild>
            <a href="mailto:shiftclawco@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              shiftclawco@gmail.com
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🦀</span>
              <span className="font-semibold">ShiftClaw</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/ShiftClawCO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.gg/shiftclawco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/ShiftClawCO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ShiftClawCO. Built with 💻 and 🤖
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
