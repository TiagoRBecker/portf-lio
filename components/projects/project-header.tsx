"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ChevronLeft, 
  ExternalLink, 
  Lock, 
  Globe, 
  Cloud,
  Github
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project, ProjectStatus } from "@/lib/types"

const statusConfig: Record<ProjectStatus, { label: string; icon: typeof Globe; className: string; description: string }> = {
  production: {
    label: "In Production",
    icon: Globe,
    className: "bg-primary/10 text-primary border-primary/20",
    description: "Live and serving users",
  },
  private: {
    label: "Private",
    icon: Lock,
    className: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    description: "Access restricted",
  },
  saas: {
    label: "SaaS Product",
    icon: Cloud,
    className: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    description: "Subscription-based product",
  },
}

interface ProjectHeaderProps {
  project: Project
  onRequestAccess?: () => void
}

export function ProjectHeader({ project, onRequestAccess }: ProjectHeaderProps) {
  const config = statusConfig[project.status]
  const StatusIcon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      {/* Breadcrumb */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ChevronLeft className="h-4 w-4" />
       Voltar para projetos
      </Link>

      {/* Title and Status */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              {project.name}
            </h1>
            <Badge variant="outline" className={`gap-1 ${config.className}`}>
              <StatusIcon className="h-3 w-3" />
              {config.label}
            </Badge>
          </div>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:items-end shrink-0">
          {project.isPublic && project.liveUrl && (
            <Button asChild className="gap-2">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Access Live Project
              </a>
            </Button>
          )}
          {!project.isPublic && project.githubAccessRequired && (
            <Button 
              variant="outline" 
              className="gap-2 bg-transparent"
              onClick={onRequestAccess}
            >
              <Github className="h-4 w-4" />
              Request GitHub Access
            </Button>
          )}
        </div>
      </div>

      {/* SaaS Details */}
      {project.status === "saas" && project.saasDetails && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6"
        >
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Cloud className="h-5 w-5 text-cyan-500" />
            SaaS Product Details
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Business Model</h4>
              <p className="mt-1 text-sm text-foreground">{project.saasDetails.businessModel}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Subscription Logic</h4>
              <p className="mt-1 text-sm text-foreground">{project.saasDetails.subscriptionLogic}</p>
            </div>
            {project.saasDetails.discontinuedReason && (
              <div className="sm:col-span-2">
                <h4 className="text-sm font-medium text-muted-foreground">Project Status</h4>
                <p className="mt-1 text-sm text-foreground">{project.saasDetails.discontinuedReason}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
