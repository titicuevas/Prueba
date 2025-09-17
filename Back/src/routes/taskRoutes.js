// Rutas para las operaciones CRUD de tareas
const express = require('express');
const { body, param } = require('express-validator');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Middleware de validación para crear tarea
const validateCreateTask = [
  body('titulo')
    .notEmpty()
    .withMessage('El título es obligatorio')
    .isLength({ min: 3, max: 100 })
    .withMessage('El título debe tener entre 3 y 100 caracteres')
    .trim(),
  body('descripcion')
    .notEmpty()
    .withMessage('La descripción es obligatoria')
    .isLength({ min: 10, max: 500 })
    .withMessage('La descripción debe tener entre 10 y 500 caracteres')
    .trim(),
  body('hecha')
    .optional()
    .isBoolean()
    .withMessage('El campo hecha debe ser un valor booleano')
];

// Middleware de validación para actualizar tarea
const validateUpdateTask = [
  param('id')
    .isMongoId()
    .withMessage('ID de tarea inválido'),
  body('titulo')
    .optional()
    .isLength({ min: 3, max: 100 })
    .withMessage('El título debe tener entre 3 y 100 caracteres')
    .trim(),
  body('descripcion')
    .optional()
    .isLength({ min: 10, max: 500 })
    .withMessage('La descripción debe tener entre 10 y 500 caracteres')
    .trim(),
  body('hecha')
    .optional()
    .isBoolean()
    .withMessage('El campo hecha debe ser un valor booleano')
];

// Middleware de validación para ID de tarea
const validateTaskId = [
  param('id')
    .isMongoId()
    .withMessage('ID de tarea inválido')
];

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Operaciones CRUD para gestión de tareas
 */

// GET /api/tasks - Obtener todas las tareas
router.get('/', taskController.getAllTasks);

// GET /api/tasks/:id - Obtener una tarea por ID
router.get('/:id', validateTaskId, taskController.getTaskById);

// POST /api/tasks - Crear una nueva tarea
router.post('/', validateCreateTask, taskController.createTask);

// PUT /api/tasks/:id - Actualizar una tarea
router.put('/:id', validateUpdateTask, taskController.updateTask);

// DELETE /api/tasks/:id - Eliminar una tarea
router.delete('/:id', validateTaskId, taskController.deleteTask);

// PATCH /api/tasks/:id/toggle - Cambiar estado de una tarea
router.patch('/:id/toggle', validateTaskId, taskController.toggleTaskStatus);

module.exports = router;
