import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects, getProjectBySlug } from "@/lib/data/projects"
import { ProjectContent } from "@/components/projects/project-content"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.name} | Full Stack Developer Portfolio`,
    description: project.shortDescription,
    keywords: project.tags,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <ProjectContent project={project} />
    </div>
  )
}
