import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Projects | Full Stack Developer Portfolio",
  description:
    "Explore production-ready projects built with Next.js, NestJS, Docker, and clean architecture principles.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Projetos
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Sistemas robustos em produção, desenvolvidos com as melhores práticas
          de mercado para garantir segurança, escalabilidade e automação
          inteligente.
        </p>
      </div>

      <ProjectsGrid />
    </div>
  );
}
