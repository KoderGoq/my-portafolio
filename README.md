# Portafolio Personal - Fernando Aguilar

Portafolio web profesional construido con Next.js 16, TypeScript, Tailwind CSS v4 y next-themes.

## Estructura del Proyecto

```
my-portafolio/
├── app/
│   ├── layout.tsx          # Layout principal con ThemeProvider
│   ├── page.tsx            # Página principal (Home)
│   └── globals.css         # Estilos globales y animaciones
├── components/
│   ├── ui/                 # Componentes UI reutilizables
│   │   ├── theme-toggle.tsx
│   │   ├── download-button.tsx
│   │   ├── stat-card.tsx
│   │   ├── tech-card.tsx
│   │   └── index.ts
│   ├── sections/           # Secciones de la página
│   │   ├── hero-section.tsx
│   │   ├── tech-stack-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── experience-education-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── footer.tsx
│   │   └── index.ts
│   └── providers/          # Providers (Theme, etc.)
│       ├── theme-provider.tsx
│       └── index.ts
├── lib/
│   ├── types/              # Definiciones TypeScript
│   │   └── index.ts
│   └── constants/          # Constantes y datos
│       ├── personal-info.ts
│       ├── tech-stack.ts
│       ├── projects.ts
│       ├── experience.ts
│       ├── education.ts
│       ├── stats.ts
│       └── index.ts
└── public/
    └── Fernando-Aguilar-Full-Stack-Developer.pdf
```

## Tecnologías

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Tema**: next-themes (Dark/Light mode)
- **Iconos**: 
  - lucide-react (UI icons)
  - react-icons (Tech stack icons)
- **Fuentes**: Geist Sans & Geist Mono

## Características

- ✅ **Completamente tipado** con TypeScript
- ✅ **Modo oscuro/claro** con next-themes
- ✅ **Iconos oficiales** de tecnologías (react-icons)
- ✅ **Componentes reutilizables** y modulares
- ✅ **Responsive design** (Mobile-first)
- ✅ **Animaciones suaves** con CSS
- ✅ **Estructura organizada** por carpetas
- ✅ **Optimizado para impresión** (CV en PDF)

## Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Ejecutar en producción
pnpm start
```

## Personalización

### Información Personal
Edita `/lib/constants/personal-info.ts` para actualizar tu información.

### Stack Tecnológico
Edita `/lib/constants/tech-stack.ts` para agregar/modificar tecnologías.

### Proyectos
Edita `/lib/constants/projects.ts` para agregar tus proyectos.

### Experiencia
Edita `/lib/constants/experience.ts` para actualizar tu experiencia laboral.

### Educación
Edita `/lib/constants/education.ts` para agregar tu formación académica.

## Mejores Prácticas Implementadas

1. **Separación de responsabilidades**: Componentes, tipos, constantes y secciones separados
2. **TypeScript estricto**: Todo tipado con interfaces claras
3. **Componentes reutilizables**: UI components que se pueden usar en múltiples lugares
4. **Constantes centralizadas**: Datos organizados en archivos de constantes
5. **Next.js 16**: Uso de Server Components y Client Components apropiadamente
6. **Tailwind v4**: Uso de las nuevas clases `bg-linear-to-*`
7. **next-themes**: Manejo de tema con hidratación correcta
8. **Iconos oficiales**: Uso de react-icons para logos de tecnologías reales

## Licencia

© 2025 Fernando Aguilar. Todos los derechos reservados.

