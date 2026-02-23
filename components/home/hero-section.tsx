"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Server, Database, Container } from "lucide-react";
import { Button } from "@/components/ui/button";

const techIcons = [
  { Icon: Code2, label: "Frontend" },
  { Icon: Server, label: "Backend" },
  { Icon: Database, label: "Database" },
  { Icon: Container, label: "DevOps" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-muted-foreground">
                Disponível para novos projetos
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            Full Stack Developer
            <br />
            <span className="text-primary">Sistemas Prontos para Produção</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Desenvolvimento de aplicações completas com foco em arquitetura
            limpa, escalabilidade e manutenção a longo prazo. Experiência em
            sistemas reais rodando em produção.
          </motion.p>

          {/* Tech icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center gap-4"
          >
            {techIcons.map(({ Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 "
          >
            <div className="flex  items-center gap-2 justify-center ">
    <Button asChild size="lg" className="gap-2">
              <Link href="/projects">
                Ver Projetos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Entrar em Contato</Link>
            </Button>
            </div>
        

        
          </motion.div>
        </div>
      </div>
    </section>
  );
}
