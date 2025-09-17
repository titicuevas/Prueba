# 🚀 Landing Page Interactiva

Una landing page moderna y completamente interactiva desarrollada con **React**, **CSS Grid/Flexbox** y **animaciones suaves**. Este proyecto demuestra habilidades avanzadas en desarrollo frontend, incluyendo componentes modulares, diseño responsivo y experiencia de usuario optimizada.

## ✨ Características Principales

### 🎯 **Funcionalidades Core**
- ✅ **Navegación fluida** con scroll suave entre secciones
- ✅ **Formulario de contacto** con validación y estados de carga
- ✅ **Lista interactiva** para gestión de tareas/ideas
- ✅ **Diseño completamente responsivo** para todos los dispositivos
- ✅ **Animaciones suaves** con Framer Motion y CSS transitions

### 🎨 **Diseño y UX**
- **CSS Grid & Flexbox** para layouts modernos y flexibles
- **Gradientes y efectos visuales** con glassmorphism
- **Transiciones fluidas** en hover y focus states
- **Paleta de colores consistente** con variables CSS
- **Tipografía escalable** con clamp() para responsividad

### 🔧 **Tecnologías Implementadas**
- **React 19** con hooks modernos (useState, useEffect)
- **Framer Motion** para animaciones avanzadas
- **React Icons** para iconografía consistente
- **CSS Variables** para mantenimiento fácil
- **Vite** como bundler ultra-rápido

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.jsx      # Navegación fija con scroll suave
│   ├── Navigation.css
│   ├── Hero.jsx           # Sección de bienvenida
│   ├── Hero.css
│   ├── Contact.jsx        # Formulario de contacto
│   ├── Contact.css
│   ├── InteractiveList.jsx # Lista de tareas interactiva
│   └── InteractiveList.css
├── App.jsx                # Componente principal
├── App.css               # Estilos globales
├── index.css             # Reset y variables CSS
└── main.jsx              # Punto de entrada
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd landing-interactiva
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Verificar código con ESLint
```

## 🎮 Funcionalidades Detalladas

### 🧭 **Navegación**
- **Navegación fija** que se adapta al scroll
- **Efecto blur** en el fondo cuando se hace scroll
- **Iconos React Icons** para mejor UX
- **Animaciones Framer Motion** en hover
- **Scroll suave** a las secciones correspondientes

### 🏠 **Sección Hero**
- **Gradientes animados** de fondo
- **Tarjetas de características** con efectos hover
- **Animaciones de entrada** escalonadas
- **Diseño responsive** con CSS Grid
- **Efectos visuales** con SVG patterns

### 📧 **Formulario de Contacto**
- **Validación de campos** requeridos
- **Estados de carga** durante el envío
- **Mensajes de éxito** animados
- **Información de contacto** con iconos
- **Diseño en grid** responsivo

### 📝 **Lista Interactiva**
- **Agregar elementos** con animaciones
- **Marcar como completado** con transiciones
- **Eliminar elementos** con confirmación visual
- **Filtros dinámicos** (todas, pendientes, completadas)
- **Estadísticas en tiempo real**
- **Animaciones de entrada/salida** con AnimatePresence

## 🎨 Guía de Estilos

### Paleta de Colores
```css
--primary-color: #2563eb    /* Azul principal */
--secondary-color: #7c3aed  /* Púrpura secundario */
--accent-color: #fbbf24     /* Amarillo de acento */
--text-primary: #1e293b     /* Texto principal */
--text-secondary: #64748b   /* Texto secundario */
--background-light: #f8fafc /* Fondo claro */
```

### Espaciado
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 1.5rem   /* 24px */
--spacing-lg: 2rem     /* 32px */
--spacing-xl: 3rem     /* 48px */
--spacing-2xl: 4rem    /* 64px */
```

### Border Radius
```css
--radius-sm: 8px       /* Bordes pequeños */
--radius-md: 12px      /* Bordes medianos */
--radius-lg: 16px      /* Bordes grandes */
--radius-full: 50px    /* Bordes completamente redondeados */
```

## 📱 Responsive Design

El proyecto está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Breakpoints utilizados
```css
@media (max-width: 768px) {
  /* Estilos móviles */
}
```

## ⚡ Optimizaciones de Rendimiento

- **Lazy loading** de animaciones
- **CSS Variables** para reutilización
- **Componentes modulares** para mejor tree-shaking
- **Animaciones optimizadas** con `transform` y `opacity`
- **Responsive images** con `clamp()` para tipografía
- **Reduced motion** para accesibilidad

## 🔧 Personalización

### Agregar nuevas secciones
1. Crear componente en `src/components/`
2. Importar en `App.jsx`
3. Agregar enlace en `Navigation.jsx`
4. Actualizar scroll suave

### Modificar colores
Editar las variables CSS en `src/index.css`:
```css
:root {
  --primary-color: #tu-color;
  --secondary-color: #tu-color;
}
```

### Agregar animaciones
Usar Framer Motion en cualquier componente:
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

## 🧪 Testing y Calidad

- **ESLint** configurado para React
- **Sin errores de linting**
- **Código modular** y mantenible
- **Accesibilidad** con focus states
- **Performance optimizada**

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Enrique Cuevas García - Desarrollador Frontend**
- 🌐 **Portfolio**: [prismatic-clafoutis-696b17.netlify.app](https://prismatic-clafoutis-696b17.netlify.app/)
- 💻 **GitHub**: [@titicuevas](https://github.com/titicuevas)
- 💼 **LinkedIn**: [enriquecuegar](https://www.linkedin.com/in/enriquecuegar/)
- 📧 **Email**: enriquecuegarcia@gmail.com

---

## 🎯 Cumplimiento de Requisitos

### ✅ **Nivel Básico - Challenge Completo**

**Consigna Original:**
- ✅ 2 secciones: "Inicio" y "Contacto"
- ✅ Menú de navegación con scroll suave
- ✅ Formulario simple con nombre, email y mensaje
- ✅ Componente React para agregar elementos a lista

**Bonus Implementados:**
- ✅ CSS Grid y Flexbox para layout
- ✅ Animaciones suaves con CSS
- ✅ **Extra**: Framer Motion para animaciones avanzadas
- ✅ **Extra**: React Icons para mejor UX
- ✅ **Extra**: Diseño responsive completo
- ✅ **Extra**: Estados de carga y validación
- ✅ **Extra**: Filtros y estadísticas en lista

**Evaluación:**
- ✅ **Estructura HTML/CSS**: Componentes modulares y CSS moderno
- ✅ **Componentes React**: Hooks, estado y props correctamente implementados
- ✅ **Organización**: Código limpio, separación de responsabilidades

---

⭐ **¡Proyecto listo para presentar!** ⭐

Desarrollado con ❤️ usando React, CSS moderno y las mejores prácticas de desarrollo frontend.