"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Lock, Globe, Cloud } from "lucide-react"
import { projects } from "@/lib/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { ProjectStatus } from "@/lib/types"

const statusConfig: Record<ProjectStatus, { label: string; icon: typeof Globe; className: string }> = {
  production: {
    label: "Public",
    icon: Globe,
    className: "bg-primary/10 text-primary border-primary/20",
  },
  private: {
    label: "Private",
    icon: Lock,
    className: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  saas: {
    label: "SaaS",
    icon: Cloud,
    className: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  },
}

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              Production systems built with modern architecture
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex gap-2">
            <Link href="/projects">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const config = statusConfig[project.status]
            const StatusIcon = config.icon

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <article className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-40 w-40 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                    
                    <div className="relative">
                      {/* Status Badge */}
                      <Badge
                        variant="outline"
                        className={`gap-1 ${config.className}`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {config.label}
                      </Badge>

                      {/* Title */}
                      <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Arrow indicator */}
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        View project
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="/projects">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
