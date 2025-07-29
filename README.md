# Academia de Danza Lucía Moreno

Una página web profesional, moderna y elegante para la Academia de Danza Lucía Moreno, inspirada en el perfil de Instagram @academiadedanzaluciamoreno. La estética transmite arte, pasión por la danza, disciplina y cercanía con un toque andaluz.

## 🎨 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Estética Andaluza**: Colores flamencos (rojo, negro, dorado) y tipografías elegantes
- **Secciones Completas**: 
  - Hero con llamada a la acción
  - Nuestra Academia con historia y filosofía
  - Disciplinas de danza
  - Profesorado
  - Galería de imágenes
  - Testimonios
  - Contacto y ubicación
  - Horarios e inscripción
- **Componentes Modernos**: Construido con Next.js, TypeScript, Tailwind CSS y shadcn/ui
- **Optimización SEO**: Meta tags y estructura semántica

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos
- **Google Fonts** - Tipografías (Playfair Display, Inter)

## 📦 Instalación

1. **Clona el repositorio**:
```bash
git clone https://github.com/tu-usuario/academia-baile-lucia-moreno.git
cd academia-baile-lucia-moreno
```

2. **Instala las dependencias**:
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abre tu navegador** en `http://localhost:3000`

## 🎯 Estructura del Proyecto

```
academia-baile-lucia-moreno/
├── app/
│   ├── globals.css          # Estilos globales y variables CSS
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   └── ui/                  # Componentes de shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts             # Utilidades
├── public/                  # Archivos estáticos
├── tailwind.config.js       # Configuración de Tailwind
├── next.config.js           # Configuración de Next.js
└── package.json
```

## 🎨 Paleta de Colores

- **Flamenco Red**: `#7f1d1d` (Rojo oscuro andaluz)
- **Andalusian Gold**: `#f59e0b` (Dorado cálido)
- **Burdeos**: `#831843` (Rojo vino)
- **Blanco**: `#ffffff`
- **Negro**: `#000000`

## 📱 Secciones de la Web

### 1. **Header**
- Navegación sticky con logo y menú
- Botón de llamada a la acción

### 2. **Hero Section**
- Imagen de fondo impactante
- Título principal con tipografía serif
- Botones de acción

### 3. **Nuestra Academia**
- Historia y filosofía
- Estadísticas destacadas
- Imagen representativa

### 4. **Disciplinas**
- 6 disciplinas principales
- Cards con imágenes y descripciones
- Badges de edad

### 5. **Profesorado**
- Perfil de Lucía Moreno
- Formación y reconocimientos
- Enlaces a redes sociales

### 6. **Galería**
- Grid de imágenes
- Efectos hover
- Enlace a Instagram

### 7. **Testimonios**
- Opiniones de familias
- Sistema de estrellas
- Diseño de cards

### 8. **Contacto**
- Información de contacto
- Formulario de solicitud
- Mapa de ubicación

### 9. **Horarios e Inscripción**
- Tabla completa de horarios
- Precios por disciplina
- Botones de descarga y contacto

### 10. **Footer**
- Información completa
- Enlaces rápidos
- Redes sociales

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `app/globals.css`:

```css
:root {
  --flamenco-red: #7f1d1d;
  --andalusian-gold: #f59e0b;
  /* ... */
}
```

### Cambiar Imágenes
Reemplaza las URLs de Unsplash en `app/page.tsx` con tus propias imágenes.

### Modificar Contenido
Edita el contenido directamente en `app/page.tsx` en las secciones correspondientes.

## 📄 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de salida: `.next`

## 📞 Contacto

Para soporte o consultas sobre el proyecto:
- Email: info@academialuciamoreno.com
- Teléfono: +34 600 116 127
- Instagram: @academiadedanzaluciamoreno
- TikTok: @academiadanzaluciamoreno
- Dirección: Centro Comercial Montepinar, Local n11, Murcia

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para la Academia de Danza Lucía Moreno**