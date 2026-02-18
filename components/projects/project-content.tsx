"use client";

import { useState } from "react";
import { ProjectHeader } from "./project-header";
import { ModuleNavigation } from "./module-navigation";
import { ModuleSection } from "./module-section";
import { AccessRequestModal } from "./access-request-modal";
import type { Project } from "@/lib/types";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ProjectHeader
        project={project}
        onRequestAccess={() => setIsModalOpen(true)}
      />

      <div className="flex gap-8">
        {/* Module Navigation (Sticky Sidebar) */}
        <aside className="hidden lg:block w-64 shrink-0">
          <ModuleNavigation modules={project.modules} />
        </aside>

        {/* Modules Content */}
        <div className="flex-1 space-y-8">
          {project.modules.map((module, index) => (
            <div key={index}>
              {module.exist && (
                <ModuleSection key={module.id} module={module} index={index} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Access Request Modal */}
      <AccessRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName={project.name}
      />
    </>
  );
}
