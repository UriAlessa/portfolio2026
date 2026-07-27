// src/components/ProjectCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";

interface Project {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  github: string;
  demo: string;
  imagen?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  // Limitamos a 4 tecnologías para que la tarjeta no se vea saturada
  const techsToShow = project.tecnologias.slice(0, 4);
  const remainingTechs = project.tecnologias.length - 4;

  return (
    <Card className="group relative flex flex-col h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
      {/* Área de Imagen (con fallback elegante si no hay imagen) */}
      <div className="aspect-video w-full overflow-hidden bg-muted/50 relative">
        {project.imagen ? (
          <img
            src={project.imagen}
            alt={project.titulo}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <Code2 className="h-12 w-12 text-primary/40 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/60" />
          </div>
        )}

        {/* Overlay sutil al hacer hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5" />
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
          {project.titulo}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {project.descripcion}
        </CardDescription>
      </CardHeader>

      <CardContent className="grow pb-4">
        <div className="flex flex-wrap gap-2">
          {techsToShow.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-normal text-xs px-2.5 py-0.5"
            >
              {tech}
            </Badge>
          ))}
          {remainingTechs > 0 && (
            <Badge
              variant="outline"
              className="font-normal text-xs px-2.5 py-0.5"
            >
              +{remainingTechs}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-2 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "flex-1 gap-2 transition-all hover:border-primary/50",
          })}
        >
          {/* SVG de GitHub inline para evitar problemas de importación */}
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          Código
        </a>

        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              size: "sm",
              className: "flex-1 gap-2 transition-all",
            })}
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
