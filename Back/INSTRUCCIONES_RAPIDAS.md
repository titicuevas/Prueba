# 🚀 Instrucciones Rápidas - API de Tareas

## **Paso 1: Instalar dependencias**
```bash
npm install
```

## **Paso 2: Ejecutar la aplicación**
```bash
npm run dev
```

¡Eso es todo! 🎉

## **¿Qué pasa cuando ejecutas `npm run dev`?**

1. **Se crea automáticamente** un archivo `database.sqlite` en tu carpeta
2. **Se crea la tabla** de tareas automáticamente
3. **El servidor inicia** en http://localhost:3000

## **Probar la API:**

### **Opción 1: Navegador**
- Ve a: http://localhost:3000
- Ve a: http://localhost:3000/api-docs (documentación interactiva)

### **Opción 2: Postman**
1. Importa el archivo `postman_collection.json`
2. Configura la variable `base_url` como `http://localhost:3000`
3. ¡Prueba los endpoints!

### **Opción 3: Terminal (con curl)**
```bash
# Crear una tarea
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Mi primera tarea","descripcion":"Esta es una tarea de prueba","hecha":false}'

# Obtener todas las tareas
curl http://localhost:3000/api/tasks
```

## **Endpoints disponibles:**

- `GET /api/tasks` - Ver todas las tareas
- `POST /api/tasks` - Crear tarea
- `GET /api/tasks/1` - Ver tarea con ID 1
- `PUT /api/tasks/1` - Actualizar tarea 1
- `DELETE /api/tasks/1` - Eliminar tarea 1
- `PATCH /api/tasks/1/toggle` - Cambiar estado de tarea 1

## **¿Qué base de datos estás usando?**

**SQLite** - Es un archivo de base de datos que se crea automáticamente en tu carpeta. No necesitas instalar nada más.

## **¿Dónde están los datos?**

En el archivo `database.sqlite` que se crea en tu carpeta del proyecto.

## **¿Cómo ver los datos?**

Puedes usar cualquier visor de SQLite como:
- DB Browser for SQLite (gratis)
- SQLiteStudio (gratis)
- O simplemente usar la API para ver los datos

## **Próximo paso: MongoDB en la nube**

Una vez que veas que funciona localmente, te explico cómo subirlo a MongoDB Atlas (gratis) para que funcione en cualquier lugar.
