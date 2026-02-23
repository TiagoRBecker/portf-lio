"use client"

import { motion } from "framer-motion"
import { Rocket, Cloud, GitBranch, Shield } from "lucide-react"

const stats = [
  {
    value: "8",
    label: "Projetos em Produção",
    description: "Sistemas ativos, utilizados por clientes reais",
    icon: Rocket,
  },
  {
    value: "1",
    label: "Sistemas ativos, utilizados por clientes reais",
    description: "Produto completo com regras de negócio reais",
    icon: Cloud,
  },
  {
    value: "Full Stack",
    label: "Arquitetura Limpa",
    description: "Backend, frontend e infraestrutura integrados",
    icon: GitBranch,
  },
  {
    value: "Ponta a Ponta",
    label: "Responsabilidade Total",
    description: "Responsabilidade Total",
    icon: Shield,
  },
]

const techStack = [
  "TypeScript",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Docker",
  "Redis",
  "Kubernetes",
  "AWS",
]

export function StatsSection() {
  return (
    <section className="relative border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h3 className="text-2xl py-3"> Especializado em backend, frontend e infraestrutura, atuando do código ao deploy, com responsabilidade total sobre o sistema.</h3>
           
       
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30"
            >
              
              <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
           Tecnologias Essenciais
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
