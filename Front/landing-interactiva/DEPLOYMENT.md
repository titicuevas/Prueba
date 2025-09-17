# 🚀 Guía de Deployment

## Opciones de Deployment

### 1. **Vercel** (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde el directorio del proyecto
vercel

# O conectar con GitHub para deployment automático
```

### 2. **Netlify**
```bash
# Build del proyecto
npm run build

# Arrastrar la carpeta 'dist' a netlify.com
# O conectar con GitHub
```

### 3. **GitHub Pages**
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script al package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### 4. **Firebase Hosting**
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login y init
firebase login
firebase init hosting

# Build y deploy
npm run build
firebase deploy
```

## Variables de Entorno

Crear archivo `.env.local`:
```env
VITE_APP_TITLE=Mi Landing Interactiva
VITE_APP_DESCRIPTION=Landing page moderna con React
```

## Optimizaciones para Producción

### Build optimizado
```bash
npm run build
```

### Preview local
```bash
npm run preview
```

### Verificar bundle
```bash
# Instalar bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Agregar al vite.config.js
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer()
  ]
})
```

## Checklist Pre-Deployment

- [ ] ✅ Código sin errores de linting
- [ ] ✅ Build exitoso sin warnings
- [ ] ✅ Responsive design verificado
- [ ] ✅ Animaciones funcionando correctamente
- [ ] ✅ Formulario de contacto funcional
- [ ] ✅ Lista interactiva operativa
- [ ] ✅ Navegación smooth scroll
- [ ] ✅ Performance optimizada
- [ ] ✅ Accesibilidad verificada

## URLs de Ejemplo

- **Desarrollo**: `http://localhost:5173`
- **Preview**: `http://localhost:4173`
- **Producción**: `https://tu-dominio.com`

---

¡Tu landing page está lista para el mundo! 🌍

