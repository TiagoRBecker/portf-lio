export type ProjectStatus = "production" | "private" | "saas"

export interface ProjectModule {
  id: string
  exist:boolean
  title: string
  icon: string
  description: string
  images: string[]
  explanation: string
}

export interface Project {
  slug: string
  name: string
  shortDescription: string
  tags: string[]
  status: ProjectStatus
  isPublic: boolean
  liveUrl?: string
  githubAccessRequired?: boolean
  modules: ProjectModule[]
  saasDetails?: {
    businessModel: string
    subscriptionLogic: string
    discontinuedReason?: string
  }
}
