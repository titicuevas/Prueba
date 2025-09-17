// Modelo de Tarea para SQLite (versión simplificada)
const { getDB } = require('../config/database');

class Task {
  constructor(data) {
    this.id = data.id;
    this.titulo = data.titulo;
    this.descripcion = data.descripcion;
    this.hecha = data.hecha || false;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }

  // Crear nueva tarea
  static async create(titulo, descripcion, hecha = false) {
    return new Promise((resolve, reject) => {
      const db = getDB();
      const sql = 'INSERT INTO tasks (titulo, descripcion, hecha) VALUES (?, ?, ?)';
      
      db.run(sql, [titulo, descripcion, hecha ? 1 : 0], function(err) {
        if (err) {
          reject(err);
        } else {
          // Obtener la tarea recién creada
          Task.findById(this.lastID).then(resolve).catch(reject);
        }
      });
    });
  }

  // Buscar por ID
  static async findById(id) {
    return new Promise((resolve, reject) => {
      const db = getDB();
      const sql = 'SELECT * FROM tasks WHERE id = ?';
      
      db.get(sql, [id], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve(new Task(row));
        } else {
          resolve(null);
        }
      });
    });
  }

  // Obtener todas las tareas
  static async findAll(options = {}) {
    return new Promise((resolve, reject) => {
      const db = getDB();
      let sql = 'SELECT * FROM tasks';
      const params = [];
      const conditions = [];

      // Filtros
      if (options.hecha !== undefined) {
        conditions.push('hecha = ?');
        params.push(options.hecha ? 1 : 0);
      }

      if (options.search) {
        conditions.push('(titulo LIKE ? OR descripcion LIKE ?)');
        const searchTerm = `%${options.search}%`;
        params.push(searchTerm, searchTerm);
      }

      if (conditions.length > 0) {
        sql += ' WHERE ' + conditions.join(' AND ');
      }

      // Ordenamiento
      sql += ' ORDER BY created_at DESC';

      // Paginación
      if (options.limit) {
        sql += ' LIMIT ?';
        params.push(parseInt(options.limit));
        
        if (options.page) {
          const offset = (options.page - 1) * options.limit;
          sql += ' OFFSET ?';
          params.push(offset);
        }
      }

      db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const tasks = rows.map(row => new Task(row));
          resolve(tasks);
        }
      });
    });
  }

  // Contar tareas
  static async count(options = {}) {
    return new Promise((resolve, reject) => {
      const db = getDB();
      let sql = 'SELECT COUNT(*) as total FROM tasks';
      const params = [];
      const conditions = [];

      // Filtros
      if (options.hecha !== undefined) {
        conditions.push('hecha = ?');
        params.push(options.hecha ? 1 : 0);
      }

      if (options.search) {
        conditions.push('(titulo LIKE ? OR descripcion LIKE ?)');
        const searchTerm = `%${options.search}%`;
        params.push(searchTerm, searchTerm);
      }

      if (conditions.length > 0) {
        sql += ' WHERE ' + conditions.join(' AND ');
      }

      db.get(sql, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row.total);
        }
      });
    });
  }

  // Actualizar tarea
  async update(updateData) {
    return new Promise((resolve, reject) => {
      const db = getDB();
      const fields = [];
      const values = [];

      if (updateData.titulo !== undefined) {
        fields.push('titulo = ?');
        values.push(updateData.titulo);
      }
      if (updateData.descripcion !== undefined) {
        fields.push('descripcion = ?');
        values.push(updateData.descripcion);
      }
      if (updateData.hecha !== undefined) {
        fields.push('hecha = ?');
        values.push(updateData.hecha ? 1 : 0);
      }

      if (fields.length === 0) {
        resolve(this);
        return;
      }

      fields.push('updated_at = CURRENT_TIMESTAMP');
      values.push(this.id);

      const sql = `UPDATE tasks SET ${fields.join(', ')} WHERE id = ?`;
      
      db.run(sql, values, (err) => {
        if (err) {
          reject(err);
        } else {
          // Actualizar el objeto actual
          if (updateData.titulo !== undefined) this.titulo = updateData.titulo;
          if (updateData.descripcion !== undefined) this.descripcion = updateData.descripcion;
          if (updateData.hecha !== undefined) this.hecha = updateData.hecha;
          this.updated_at = new Date().toISOString();
          resolve(this);
        }
      });
    });
  }

  // Eliminar tarea
  async delete() {
    return new Promise((resolve, reject) => {
      const db = getDB();
      const sql = 'DELETE FROM tasks WHERE id = ?';
      
      db.run(sql, [this.id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }

  // Cambiar estado de la tarea
  async toggle() {
    this.hecha = !this.hecha;
    return this.update({ hecha: this.hecha });
  }
}

module.exports = Task;
