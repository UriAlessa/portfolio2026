# Portafolio personal

Sitio web de Uriel Alessandro, desarrollado para presentar experiencia laboral, formación, habilidades técnicas, certificaciones y proyectos.

## Tecnologías

- Astro
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Desarrollo local

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

El sitio estará disponible en la dirección indicada por Astro en la terminal.

## Comandos

```bash
npm run dev      # Inicia el entorno de desarrollo
npm run build    # Genera la versión de producción
npm run preview  # Previsualiza la compilación localmente
```

## Estructura principal

```text
src/
├── components/  Componentes Astro y React
├── data/        Información mostrada en el portafolio
├── hooks/       Hooks reutilizables
├── pages/       Páginas del sitio
└── styles/      Estilos globales
```

Los datos personales, proyectos y experiencia se administran desde `src/data/portfolio.ts`.
