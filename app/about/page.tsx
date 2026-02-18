import type { Metadata } from "next"
import { AboutContent } from "@/components/about/about-content"

export const metadata: Metadata = {
  title: "About | Full Stack Developer Portfolio",
  description:
    "Senior Full Stack Developer with expertise in production-grade systems, clean architecture, and scalable infrastructure.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <AboutContent />
    </div>
  )
}
