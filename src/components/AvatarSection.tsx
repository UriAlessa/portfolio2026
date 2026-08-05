import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarSectionProps {
  nombre: string;
  imagenUrl?: string;
}

export function AvatarSection({ nombre, imagenUrl }: AvatarSectionProps) {
  const iniciales = nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-lg">
      <AvatarImage src={imagenUrl} alt={nombre} />
      <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
        {iniciales}
      </AvatarFallback>
    </Avatar>
  );
}
