// src/components/TechBadge.tsx
import { Badge } from "@/components/ui/badge";
import "devicon/devicon.min.css";

interface TechBadgeProps {
  tech: string;
  index: number;
}

const techIcons: Record<string, string> = {
  React: "devicon-react-original",
  TypeScript: "devicon-typescript-plain",
  JavaScript: "devicon-javascript-plain",
  "Node.js": "devicon-nodejs-plain",
  "Tailwind CSS": "devicon-tailwindcss-plain",
  PostgreSQL: "devicon-postgresql-plain",
  Git: "devicon-git-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  MongoDB: "devicon-mongodb-plain",
  "Next.js": "devicon-nextjs-plain",
  "Express.js": "devicon-express-original",
  "shadcn/ui": "devicon-figma-plain",
  "REST APIs": "devicon-amazonwebservices-plain-wordmark",
  JWT: "devicon-nodejs-plain",
  Bcrypt: "devicon-linux-plain",
  SQL: "devicon-postgresql-plain",
};

// SVG del logo de Astro
function AstroIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.48 88.56c-2.72 2.24-4.4 5.6-4.4 9.36 0 6.64 5.36 12 12 12s12-5.36 12-12c0-3.76-1.68-7.12-4.4-9.36L64 86.72l1.32 1.84c2.72 2.24 4.4 5.6 4.4 9.36 0 6.64-5.36 12-12 12s-12-5.36-12-12c0-3.76 1.68-7.12 4.4-9.36L47.48 88.56z"
        fill="currentColor"
      />
      <path
        d="M64 16c-2.4 0-4.56 1.44-5.52 3.6L32.56 82.8c-.96 2.16-.48 4.72 1.2 6.4l.72.72c1.68 1.68 4.24 2.16 6.4 1.2L64 80.4l23.12 10.72c2.16.96 4.72.48 6.4-1.2l.72-.72c1.68-1.68 2.16-4.24 1.2-6.4L69.52 19.6C68.56 17.44 66.4 16 64 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TechBadge({ tech, index }: TechBadgeProps) {
  const iconClass = techIcons[tech];
  const isAstro = tech === "Astro";
  const animationDelay = `${index * 0.3}s`;

  return (
    <Badge
      variant="secondary"
      className="text-base px-6 py-4 flex items-center gap-2 animate-float cursor-default transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] hover:bg-primary/10 hover:-translate-y-1 group"
      style={{
        animationDelay,
        animationDuration: "3s",
      }}
    >
      {isAstro ? (
        <AstroIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
      ) : (
        iconClass && (
          <i
            className={`${iconClass} text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6`}
          ></i>
        )
      )}
      {tech}
    </Badge>
  );
}
