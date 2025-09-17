# 📝 Lista de Tareas Fullstack

Una aplicación fullstack moderna para gestionar tareas personales con autenticación JWT.

## 🚀 Características

- **Frontend**: React con Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **Autenticación**: JWT (JSON Web Tokens)
- **Base de datos**: MongoDB (local o en memoria)
- **Validaciones**: Express Validator
- **Seguridad**: Bcrypt para hash de contraseñas

## 📋 Funcionalidades

### 🔐 Autenticación
- Registro de usuarios
- Inicio de sesión
- Rutas protegidas
- Tokens JWT seguros

### ✅ Gestión de Tareas
- Crear nuevas tareas
- Editar tareas existentes
- Eliminar tareas
- Marcar tareas como completadas
- Lista personalizada por usuario

## 🛠️ Instalación Rápida

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd lista-tareas-fullstack
```

### 2. Instalar dependencias
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Ejecutar la aplicación

#### 🚀 Opción 1: Base de datos en memoria (Recomendado para desarrollo)
```bash
# Terminal 1 - Backend con MongoDB en memoria
cd backend
npm run dev-memory

# Terminal 2 - Frontend
cd frontend
npm start
```

#### 🗄️ Opción 2: MongoDB local
```bash
# Instalar MongoDB localmente
# Windows: Ejecutar install-mongodb.bat
# Linux/Mac: https://docs.mongodb.com/manual/installation/

# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

#### ⚡ Opción 3: Scripts automáticos
```bash
# Windows
start-dev.bat

# Linux/Mac
./start-dev.sh
```

## 🌐 URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Docs**: http://localhost:5000/api

## 🎨 Diseño Mejorado

### ✨ Características del UI
- **Formularios modernos** con gradientes y sombras
- **Inputs con iconos** y efectos de focus
- **Botones animados** con efectos hover
- **Diseño responsive** y centrado
- **Colores diferenciados**: Azul para login, Verde para registro
- **Emojis en lugar de SVG** para mejor compatibilidad

### 🎯 Mejoras Visuales
- Fondos con gradientes suaves
- Bordes redondeados (rounded-2xl)
- Sombras elegantes (shadow-2xl)
- Transiciones suaves (300ms)
- Efectos de escala en hover
- Anillos de focus mejorados

## 📁 Estructura del Proyecto

```
lista-tareas-fullstack/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── server-memory.js    # Servidor con MongoDB en memoria
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── TaskList.js
│   │   │   └── ProtectedRoute.js
│   │   ├── contexts/
│   │   │   └── AuthContext.js
│   │   ├── services/
│   │   │   └── taskService.js
│   │   └── App.js
│   └── package.json
├── install-mongodb.bat     # Script para instalar MongoDB en Windows
├── start-dev.bat
├── start-dev.sh
└── README.md
```

## 🔧 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión

### Tareas
- `GET /api/tasks` - Obtener tareas del usuario
- `POST /api/tasks` - Crear nueva tarea
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea

## 🚀 Despliegue

### Frontend (Vercel)
1. Conectar repositorio a Vercel
2. Configurar build command: `npm run build`
3. Configurar output directory: `build`
4. Desplegar

### Backend (Render/Heroku)
1. Conectar repositorio
2. Configurar variables de entorno
3. Configurar build command: `npm install`
4. Configurar start command: `npm start`
5. Desplegar

## 🛡️ Seguridad

- Contraseñas hasheadas con bcrypt
- Tokens JWT con expiración
- Validación de entrada
- CORS configurado
- Rutas protegidas

## 🎨 Tecnologías

### Frontend
- React 18
- Tailwind CSS
- React Router
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Express Validator

## 🐛 Solución de Problemas

### Error de MongoDB
Si ves el error "MongooseError: Operation `users.findOne()` buffering timed out":

1. **Usa la base de datos en memoria** (recomendado):
   ```bash
   cd backend
   npm run dev-memory
   ```

2. **Instala MongoDB localmente**:
   - Windows: Ejecuta `install-mongodb.bat`
   - Linux/Mac: Sigue la guía oficial de MongoDB

3. **Usa MongoDB Atlas** (en la nube):
   - Crea una cuenta en MongoDB Atlas
   - Obtén la URI de conexión
   - Configura la variable `MONGODB_URI` en el archivo `.env`

### Error de Tailwind CSS
Si hay problemas con Tailwind CSS:
- Los estilos están configurados correctamente
- Usa `npm start` en el frontend
- Los emojis reemplazan los SVG para evitar problemas

## 📝 Notas de Desarrollo

- El proyecto usa ES6+ y CommonJS
- Las rutas están protegidas con middleware JWT
- Los errores se manejan de forma centralizada
- La UI es responsive y moderna
- Se incluyen validaciones tanto en frontend como backend
- **Base de datos en memoria** para desarrollo sin configuración

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.