// src/components/CertificationCard.tsx
import { Card } from "@/components/ui/card";
import { ExternalLink, Award } from "lucide-react";

interface Certification {
  titulo: string;
  emisor: string;
  fecha: string;
  credencialUrl: string;
  imagenUrl: string;
  descripcion?: string;
}

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 h-full">
      <a
        href={cert.credencialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 h-full"
      >
        <div className="flex items-start gap-4">
          {/* Badge Image */}
          <div className="flex-shrink-0 mt-1">
            <img
              src={cert.imagenUrl}
              alt={`Badge de ${cert.titulo}`}
              className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
              onError={(e) => {
                // Fallback si la imagen de Credly no carga
                (e.target as HTMLImageElement).style.display = "none";
                (
                  e.target as HTMLImageElement
                ).nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="hidden h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <Award className="h-8 w-8" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
              {cert.titulo}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {cert.emisor} • {cert.fecha}
            </p>

            {/* Descripción: 2 líneas por defecto, se expande completa al hacer hover */}
            {cert.descripcion && (
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {cert.descripcion}
              </p>
            )}

            {/* Indicador de verificación */}
            <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="h-3.5 w-3.5" />
              Ver credencial oficial
            </div>
          </div>
        </div>
      </a>
    </Card>
  );
}
