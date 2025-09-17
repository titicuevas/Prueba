// Configuración de Swagger para documentación de la API
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Tareas',
      version: '1.0.0',
      description: 'API REST para gestión de tareas con Node.js y Express',
      contact: {
        name: 'Tu Nombre',
        email: 'tu@email.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo'
      }
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          required: ['titulo', 'descripcion'],
          properties: {
            _id: {
              type: 'string',
              description: 'ID único de la tarea'
            },
            titulo: {
              type: 'string',
              description: 'Título de la tarea',
              example: 'Completar proyecto'
            },
            descripcion: {
              type: 'string',
              description: 'Descripción detallada de la tarea',
              example: 'Finalizar la implementación del backend'
            },
            hecha: {
              type: 'boolean',
              description: 'Estado de la tarea',
              default: false
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de creación'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de última actualización'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Mensaje de error'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerSpec,
  swaggerUi
};
