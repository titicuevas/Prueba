// Modelo de Tarea con Mongoose
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true,
    minlength: [3, 'El título debe tener al menos 3 caracteres'],
    maxlength: [100, 'El título no puede exceder 100 caracteres']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    trim: true,
    minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
    maxlength: [500, 'La descripción no puede exceder 500 caracteres']
  },
  hecha: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
  versionKey: false // No incluir __v en el documento
});

// Índices para mejorar el rendimiento
taskSchema.index({ titulo: 'text', descripcion: 'text' });
taskSchema.index({ hecha: 1 });
taskSchema.index({ createdAt: -1 });

// Middleware pre-save para validaciones adicionales
taskSchema.pre('save', function(next) {
  // Convertir título a título case
  if (this.titulo) {
    this.titulo = this.titulo.charAt(0).toUpperCase() + this.titulo.slice(1).toLowerCase();
  }
  next();
});

// Método de instancia para marcar como completada
taskSchema.methods.marcarCompletada = function() {
  this.hecha = true;
  return this.save();
};

// Método de instancia para marcar como pendiente
taskSchema.methods.marcarPendiente = function() {
  this.hecha = false;
  return this.save();
};

// Método estático para obtener tareas completadas
taskSchema.statics.getCompletadas = function() {
  return this.find({ hecha: true }).sort({ updatedAt: -1 });
};

// Método estático para obtener tareas pendientes
taskSchema.statics.getPendientes = function() {
  return this.find({ hecha: false }).sort({ createdAt: -1 });
};

// Método estático para buscar tareas por texto
taskSchema.statics.buscarPorTexto = function(texto) {
  return this.find({
    $or: [
      { titulo: { $regex: texto, $options: 'i' } },
      { descripcion: { $regex: texto, $options: 'i' } }
    ]
  }).sort({ createdAt: -1 });
};

module.exports = mongoose.model('Task', taskSchema);
