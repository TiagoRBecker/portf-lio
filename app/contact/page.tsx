import type { Metadata } from "next"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact | Full Stack Developer Portfolio",
  description:
    "Get in touch to discuss your next project or collaboration opportunity.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <ContactContent />
    </div>
  )
}
