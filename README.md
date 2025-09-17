# 🚀 Portfolio de Proyectos Fullstack

Una colección completa de proyectos web modernos que demuestran habilidades en desarrollo frontend, backend y fullstack. Incluye APIs REST, landing pages interactivas y aplicaciones con autenticación.

## 📁 Estructura del Proyecto

```
📦 Portfolio-Fullstack/
├── 🎯 Back/                    # API REST con Node.js + SQLite
├── 🎨 Front/                   # Landing Page Interactiva con React
├── 🔐 Full/                    # Aplicación Fullstack con JWT
└── 📚 README.md               # Este archivo
```

---

## 🎯 Back - API REST de Tareas

**Tecnologías:** Node.js, Express, SQLite, Swagger, Postman

### ✨ Características
- ✅ **CRUD completo** para gestión de tareas
- ✅ **Base de datos SQLite** (sin configuración adicional)
- ✅ **Documentación automática** con Swagger UI
- ✅ **Validaciones robustas** con express-validator
- ✅ **Seguridad** con Helmet y rate limiting
- ✅ **Colección Postman** incluida para testing

### 🚀 Inicio Rápido
```bash
cd Back
npm install
npm run dev
# API disponible en: http://localhost:3000
# Documentación: http://localhost:3000/api-docs
```

### 📋 Endpoints
- `GET /api/tasks` - Obtener todas las tareas
- `POST /api/tasks` - Crear nueva tarea
- `GET /api/tasks/:id` - Obtener tarea por ID
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea
- `PATCH /api/tasks/:id/toggle` - Cambiar estado

---

## 🎨 Front - Landing Page Interactiva

**Tecnologías:** React 19, Vite, Framer Motion, CSS Grid/Flexbox

### ✨ Características
- ✅ **Navegación fluida** con scroll suave
- ✅ **Formulario de contacto** con validación
- ✅ **Lista interactiva** de tareas/ideas
- ✅ **Animaciones avanzadas** con Framer Motion
- ✅ **Diseño responsive** para todos los dispositivos
- ✅ **CSS moderno** con Grid y Flexbox

### 🚀 Inicio Rápido
```bash
cd Front/landing-interactiva
npm install
npm run dev
# Aplicación disponible en: http://localhost:5173
```

### 🎮 Funcionalidades
- **Navegación fija** con efectos blur
- **Sección Hero** con gradientes animados
- **Formulario de contacto** con estados de carga
- **Lista interactiva** con filtros y estadísticas
- **Animaciones suaves** en todos los elementos

---

## 🔐 Full - Aplicación Fullstack con JWT

**Tecnologías:** React, Node.js, Express, MongoDB, JWT, Tailwind CSS

### ✨ Características
- ✅ **Autenticación completa** con JWT
- ✅ **Gestión de tareas personalizada** por usuario
- ✅ **Frontend moderno** con Tailwind CSS
- ✅ **Backend robusto** con validaciones
- ✅ **Base de datos en memoria** para desarrollo
- ✅ **Rutas protegidas** y middleware de seguridad

### 🚀 Inicio Rápido
```bash
# Backend
cd Full/backend
npm install
npm run dev-memory  # Usa MongoDB en memoria

# Frontend (nueva terminal)
cd Full/frontend
npm install
npm start
# Aplicación disponible en: http://localhost:3000
```

### 🔧 Opciones de Base de Datos
1. **MongoDB en memoria** (recomendado para desarrollo)
2. **MongoDB local** (requiere instalación)
3. **MongoDB Atlas** (en la nube)

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18/19** - Biblioteca de UI
- **Vite** - Bundler ultra-rápido
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones avanzadas
- **React Icons** - Iconografía consistente
- **CSS Grid/Flexbox** - Layouts modernos

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB/SQLite** - Bases de datos
- **JWT** - Autenticación
- **Bcrypt** - Hash de contraseñas
- **Swagger** - Documentación API

### Herramientas
- **Postman** - Testing de APIs
- **Git** - Control de versiones
- **npm** - Gestor de paquetes
- **ESLint** - Linting de código

---

## 🚀 Despliegue

### Frontend (Vercel)
1. Conectar repositorio a Vercel
2. Configurar build command: `npm run build`
3. Configurar output directory: `build` o `dist`
4. Desplegar automáticamente

### Backend (Render/Heroku)
1. Conectar repositorio
2. Configurar variables de entorno
3. Configurar build command: `npm install`
4. Configurar start command: `npm start`
5. Desplegar

### Base de Datos
- **SQLite**: Archivo local (Back/)
- **MongoDB Atlas**: Base de datos en la nube (Full/)
- **MongoDB en memoria**: Para desarrollo (Full/)

---

## 📊 Características Destacadas

### 🎯 **Nivel Básico - Completado**
- ✅ Estructura HTML/CSS modular
- ✅ Componentes React funcionales
- ✅ Navegación con scroll suave
- ✅ Formularios con validación
- ✅ Lista interactiva de elementos

### ⭐ **Nivel Avanzado - Implementado**
- ✅ **Animaciones avanzadas** con Framer Motion
- ✅ **Diseño responsive** completo
- ✅ **Autenticación JWT** segura
- ✅ **APIs REST** documentadas
- ✅ **Validaciones robustas** frontend/backend
- ✅ **Estados de carga** y UX optimizada
- ✅ **Filtros dinámicos** y estadísticas
- ✅ **Seguridad** con Helmet y CORS

### 🚀 **Extras Implementados**
- ✅ **Documentación Swagger** automática
- ✅ **Colección Postman** para testing
- ✅ **Base de datos en memoria** para desarrollo
- ✅ **Scripts de instalación** automáticos
- ✅ **Múltiples opciones** de base de datos
- ✅ **Diseño moderno** con gradientes y efectos

---

## 🧪 Testing

### API Testing
- **Postman Collection** incluida en `Back/postman_collection.json`
- **Swagger UI** disponible en `/api-docs`
- **Endpoints documentados** con ejemplos

### Frontend Testing
- **ESLint** configurado para calidad de código
- **Responsive testing** en múltiples dispositivos
- **Animaciones optimizadas** para rendimiento

---

## 📝 Notas de Desarrollo

### 🎨 **Diseño**
- Paleta de colores consistente
- Tipografía escalable con `clamp()`
- Efectos visuales modernos (glassmorphism)
- Transiciones suaves (300ms)

### 🔧 **Arquitectura**
- Separación clara de responsabilidades
- Componentes modulares y reutilizables
- Hooks personalizados para lógica compartida
- Context API para estado global

### 🚀 **Rendimiento**
- Lazy loading de animaciones
- CSS Variables para reutilización
- Optimizaciones de bundle
- Animaciones con `transform` y `opacity`

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


---

## 👨‍💻 Autor

**Enrique Cuevas García - Desarrollador Fullstack**
- 🌐 **Portfolio**: [prismatic-clafoutis-696b17.netlify.app](https://prismatic-clafoutis-696b17.netlify.app/)
- 💻 **GitHub**: [@titicuevas](https://github.com/titicuevas)
- 💼 **LinkedIn**: [enriquecuegar](https://www.linkedin.com/in/enriquecuegar/)
- 📧 **Email**: enriquecuegarcia@gmail.com

---



⭐ **¡Proyectos listos para presentar!** ⭐

Desarrollado con ❤️ usando las mejores prácticas de desarrollo web moderno.
