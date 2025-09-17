# API de Tareas - Backend

Una API REST completa para la gestión de tareas construida con Node.js, Express y MongoDB.

## 🚀 Características

- **CRUD completo** para tareas
- **Validaciones robustas** con express-validator
- **Seguridad** con Helmet y rate limiting
- **Documentación automática** con Swagger
- **Paginación** y búsqueda
- **Estructura organizada** con separación de responsabilidades
- **Manejo de errores** centralizado

## 📋 Requisitos

- Node.js (v14 o superior)
- MongoDB (local o en la nube)
- npm o yarn

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd api-tareas-backend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env
   ```
   
   Editar el archivo `.env` con tus configuraciones:
   ```env
   NODE_ENV=development
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/tareas_db
   FRONTEND_URL=http://localhost:3000
   ```

4. **Iniciar MongoDB**
   - Local: Asegúrate de que MongoDB esté corriendo en tu sistema
   - En la nube: Usa MongoDB Atlas y actualiza la URI en `.env`

5. **Ejecutar la aplicación**
   ```bash
   # Modo desarrollo (con nodemon)
   npm run dev
   
   # Modo producción
   npm start
   ```

## 📚 Documentación de la API

Una vez que la aplicación esté corriendo, puedes acceder a la documentación interactiva de Swagger en:
- **Swagger UI**: http://localhost:3000/api-docs

## 🔗 Endpoints

### Tareas

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| GET | `/api/tasks/:id` | Obtener una tarea por ID |
| POST | `/api/tasks` | Crear una nueva tarea |
| PUT | `/api/tasks/:id` | Actualizar una tarea |
| DELETE | `/api/tasks/:id` | Eliminar una tarea |
| PATCH | `/api/tasks/:id/toggle` | Cambiar estado de una tarea |

### Parámetros de consulta (GET /api/tasks)

- `page`: Número de página (default: 1)
- `limit`: Elementos por página (default: 10)
- `hecha`: Filtrar por estado (true/false)
- `search`: Buscar en título y descripción

### Estructura de una tarea

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "titulo": "Completar proyecto",
  "descripcion": "Finalizar la implementación del backend",
  "hecha": false,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

## 🧪 Pruebas con Postman

1. Importa la colección `postman_collection.json` en Postman
2. Configura la variable `base_url` como `http://localhost:3000`
3. Ejecuta las pruebas en el siguiente orden:
   - Crear nueva tarea
   - Obtener todas las tareas
   - Obtener tarea por ID
   - Actualizar tarea
   - Cambiar estado de tarea
   - Buscar tareas
   - Eliminar tarea

## 🏗️ Estructura del proyecto

```
src/
├── app.js                 # Archivo principal de la aplicación
├── config/
│   ├── database.js        # Configuración de MongoDB
│   └── swagger.js         # Configuración de Swagger
├── controllers/
│   └── taskController.js  # Lógica de negocio para tareas
├── models/
│   └── Task.js           # Modelo de datos de tareas
└── routes/
    └── taskRoutes.js     # Definición de rutas
```

## 🔒 Seguridad

- **Helmet**: Headers de seguridad HTTP
- **CORS**: Configuración de origen cruzado
- **Rate Limiting**: Límite de 100 requests por 15 minutos
- **Validación de entrada**: Sanitización y validación de datos
- **Manejo de errores**: Respuestas seguras sin información sensible

## 🚀 Despliegue

### Variables de entorno para producción

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/tareas_db
FRONTEND_URL=https://tu-frontend.com
```

### Comandos de despliegue

```bash
# Instalar dependencias de producción
npm install --production

# Iniciar aplicación
npm start
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests con coverage
npm run test:coverage
```

## 📝 Scripts disponibles

- `npm start`: Iniciar aplicación en modo producción
- `npm run dev`: Iniciar aplicación en modo desarrollo con nodemon
- `npm test`: Ejecutar tests

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes alguna pregunta o problema, por favor:
1. Revisa la documentación de Swagger
2. Verifica los logs de la aplicación
3. Asegúrate de que MongoDB esté corriendo
4. Revisa la configuración de variables de entorno

## 🎯 Próximas mejoras

- [ ] Autenticación y autorización
- [ ] Categorías de tareas
- [ ] Fechas de vencimiento
- [ ] Notificaciones
- [ ] Tests unitarios completos
- [ ] Dockerización
- [ ] CI/CD pipeline
