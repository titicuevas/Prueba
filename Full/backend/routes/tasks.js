const express = require('express');
const { body, validationResult } = require('express-validator');
const Task = require('../models/Task');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/tasks
// @desc    Obtener todas las tareas del usuario
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    console.error('Error obteniendo tareas:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// @route   POST /api/tasks
// @desc    Crear nueva tarea
// @access  Private
router.post('/', [
  auth,
  body('title').notEmpty().withMessage('El título es requerido'),
  body('description').optional()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description } = req.body;

    const task = new Task({
      title,
      description,
      user: req.user._id
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creando tarea:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// @route   PUT /api/tasks/:id
// @desc    Actualizar tarea
// @access  Private
router.put('/:id', [
  auth,
  body('title').optional().notEmpty().withMessage('El título no puede estar vacío'),
  body('description').optional(),
  body('completed').optional().isBoolean().withMessage('Completed debe ser un booleano')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, completed } = req.body;
    const taskId = req.params.id;

    const task = await Task.findOne({ _id: taskId, user: req.user._id });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;

    await task.save();
    res.json(task);
  } catch (error) {
    console.error('Error actualizando tarea:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// @route   DELETE /api/tasks/:id
// @desc    Eliminar tarea
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findOne({ _id: taskId, user: req.user._id });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    await Task.findByIdAndDelete(taskId);
    res.json({ message: 'Tarea eliminada exitosamente' });
  } catch (error) {
    console.error('Error eliminando tarea:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// @route   PATCH /api/tasks/:id/toggle
// @desc    Cambiar estado de completado de la tarea
// @access  Private
router.patch('/:id/toggle', auth, async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findOne({ _id: taskId, user: req.user._id });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    task.completed = !task.completed;
    await task.save();

    res.json(task);
  } catch (error) {
    console.error('Error cambiando estado de tarea:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
