"use client"

import { motion } from "framer-motion"
import { 
  Boxes, 
  LayoutDashboard, 
  Container, 
  Monitor 
} from "lucide-react"
import { ImageCarousel } from "./image-carousel"
import type { ProjectModule } from "@/lib/types"

const iconMap: Record<string, typeof Boxes> = {
  architecture: Boxes,
  admin: LayoutDashboard,
  infrastructure: Container,
  client: Monitor,
}

interface ModuleSectionProps {
  module: ProjectModule
  index: number
}

export function ModuleSection({ module, index }: ModuleSectionProps) {
  const Icon = iconMap[module.icon] || Boxes

  return (
    <motion.section
      id={module.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="scroll-mt-24"
    >
      <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
              {module.title}
            </h3>
            <p className="mt-1 text-muted-foreground">{module.description}</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-6">
          <ImageCarousel images={module.images} title={module.title} />
        </div>

        {/* Explanation */}
        <div className="mt-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed font-mono text-sm bg-secondary/30 rounded-lg p-4 border border-border/50">
              {module.explanation}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
