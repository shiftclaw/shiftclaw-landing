"use client"

import {
  Terminal,
  Shield,
  Package,
  Cpu,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Agent {
  name: string
  role: string
  icon: React.ElementType
  status: "active" | "idle" | "done"
  task: string
}

interface AppMockupProps {
  title?: string
  agents?: Agent[]
  className?: string
}

const defaultAgents: Agent[] = [
  {
    name: "Ink",
    role: "Developer",
    icon: Terminal,
    status: "active",
    task: "Implementing auth flow",
  },
  {
    name: "Spike",
    role: "QA",
    icon: Shield,
    status: "idle",
    task: "Waiting for code review",
  },
  {
    name: "Whale",
    role: "Product",
    icon: Package,
    status: "done",
    task: "Sprint planning complete",
  },
  {
    name: "Anchor",
    role: "DevOps",
    icon: Cpu,
    status: "active",
    task: "Deploying to preview",
  },
]

const statusConfig = {
  active: {
    color: "bg-green-500",
    label: "Active",
    icon: Zap,
  },
  idle: {
    color: "bg-yellow-500",
    label: "Waiting",
    icon: Clock,
  },
  done: {
    color: "bg-blue-500",
    label: "Done",
    icon: CheckCircle2,
  },
}

export function AppMockup({
  title = "ShiftClaw Command",
  agents = defaultAgents,
  className,
}: AppMockupProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-gradient-to-br from-background via-background to-primary/5",
        className,
      )}
    >
      {/* App window chrome */}
      <div className="w-full max-w-4xl px-4 md:px-8">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-card/80 shadow-2xl backdrop-blur-sm">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 text-xs text-muted-foreground">{title}</span>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            {/* Header stats */}
            <div className="mb-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-white/5 bg-white/5 p-3 text-center">
                <div className="text-2xl font-bold">
                  {agents.filter((a) => a.status === "active").length}
                </div>
                <div className="text-xs text-muted-foreground">Active</div>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/5 p-3 text-center">
                <div className="text-2xl font-bold">
                  {agents.filter((a) => a.status === "done").length}
                </div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/5 p-3 text-center">
                <div className="text-2xl font-bold">{agents.length}</div>
                <div className="text-xs text-muted-foreground">Agents</div>
              </div>
            </div>

            {/* Agent list */}
            <div className="space-y-3">
              {agents.map((agent) => {
                const Icon = agent.icon
                const config = statusConfig[agent.status]
                const StatusIcon = config.icon
                return (
                  <div
                    key={agent.name}
                    className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/[0.03] p-3 transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {agent.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {agent.role}
                        </span>
                      </div>
                      <p className="truncate text-xs text-muted-foreground">
                        {agent.task}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div
                        className={cn(
                          "h-2 w-2 rounded-full",
                          config.color,
                          agent.status === "active" && "animate-pulse",
                        )}
                      />
                      <StatusIcon className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
