"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Boxes, LayoutDashboard, Container, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectModule } from "@/lib/types";

const iconMap: Record<string, typeof Boxes> = {
  architecture: Boxes,
  admin: LayoutDashboard,
  infrastructure: Container,
  client: Monitor,
};

interface ModuleNavigationProps {
  modules: ProjectModule[];
}

export function ModuleNavigation({ modules }: ModuleNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(
    modules[0]?.id || "",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    modules.forEach((module) => {
      const element = document.getElementById(module.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [modules]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-20 hidden lg:block">
      <div className="rounded-xl border border-border/50 bg-card p-4">
        <h4 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Modules
        </h4>
        <ul className="h-full">
          {modules.map((module,index) => {
            const Icon = iconMap[module.icon] || Boxes;
            const isActive = activeSection === module.id;

            return (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(module.id)}
                  className={cn(
                    "relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="module-active"
                      className="absolute inset-0 rounded-lg bg-secondary"
                      style={{ zIndex: -1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {module.exist && (
                  <>
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{module.title}</span>
                 </>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
