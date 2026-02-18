"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Server,
  Container,
  Code2,
  Database,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "REST APIs"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "Redis", "Prisma"],
  },
  {
    category: "Infrastructure",
    icon: Container,
    items: ["Docker", "CI/CD", "Nginx", "AWS"],
  },
  {
    category: "Architecture",
    icon: Boxes,
    items: ["Hexagonal", "SOLID", "DDD"],
  },
  {
    category: "Practices",
    icon: GitBranch,
    items: ["Git Flow", "Code Review", "Testing", "Documentation", "Agile"],
  },
];

const principles = [
  "Código limpo não é um luxo, é um requisito para sistemas fáceis de manter.",
  "Decisões de arquitetura devem priorizar a manutenção a longo prazo, e não atalhos de curto prazo.",
  "Testes são um investimento em confiança e estabilidade, não um custo.",
  "Infraestrutura como código permite ambientes reproduzíveis e auditáveis.",
  "O domínio do negócio deve estar no centro das decisões técnicas.",
];

export function AboutContent() {
  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Sobre Mim
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Sou desenvolvedor Full Stack, especializado na construção de sistemas
          prontos para produção, com foco em arquitetura limpa, escalabilidade e
          manutenção a longo prazo. Tenho experiência no desenvolvimento de
          aplicações reais em produção, atuando desde a modelagem da arquitetura
          até a entrega final, incluindo backend, frontend, infraestrutura e
          monitoramento. Meu objetivo é criar software seguro, estável e
          sustentável, que resolva problemas reais de negócio.
        </p>
      </motion.div>

      {/* Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12"
      >
        <h2 className="text-xl font-semibold text-foreground">
          Filosofia de Engenharia
        </h2>
        <div className="mt-6 space-y-3">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <p className="text-muted-foreground">{principle}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12"
      >
        <h2 className="text-xl font-semibold text-foreground">
          Habilidades Técnicas
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="rounded-xl border border-border/50 bg-card p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <skill.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Summary */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-xl font-semibold text-foreground">
       O Que Eu Entrego
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-semibold text-foreground">
              Sistemas em Produção
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Todos os projetos são pensados para uso real em produção, com tratamento adequado de erros, logs, monitoramento e segurança desde o início.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-semibold text-foreground">
              Arquitetura Limpa
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
             Aplico arquitetura hexagonal e princípios SOLID para garantir que o código permaneça organizado, testável e sustentável conforme o sistema cresce.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-semibold text-foreground">
              Responsabilidade Full Stack
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
             Atuo de ponta a ponta: do backend à interface, passando por infraestrutura, deploy e monitoramento, garantindo que todas as partes funcionem de forma integrada.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-semibold text-foreground">
              Infraestrutura e Deploy
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
            Containerização, automação de deploy e pipelines de CI/CD fazem parte do processo de desenvolvimento, não são tratados como etapa final.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
