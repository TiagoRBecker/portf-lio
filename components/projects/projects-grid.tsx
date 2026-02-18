"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter } from "lucide-react"
import { projects } from "@/lib/data/projects"
import { ProjectCard } from "./project-card"
import { Button } from "@/components/ui/button"
import type { ProjectStatus } from "@/lib/types"

type FilterType = "all" | ProjectStatus

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "Todos Projetos" },
  { value: "production", label: "Publicos" },
  { value: "private", label: "Privados" },
  { value: "saas", label: "SaaS" },
]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    return project.status === activeFilter
  })

  return (
    <div>
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 flex-wrap"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filter:</span>
        </div>
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant={activeFilter === filter.value ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter(filter.value)}
            className="text-sm"
          >
            {filter.label}
          </Button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p className="text-muted-foreground">No projects found for this filter.</p>
        </motion.div>
      )}
    </div>
  )
}
