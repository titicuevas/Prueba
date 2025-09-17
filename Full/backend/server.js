const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Importar rutas
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskapp';

// Configuración de conexión mejorada
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10, // Mantener hasta 10 conexiones en el pool
      serverSelectionTimeoutMS: 5000, // Mantener intentando por 5 segundos
      socketTimeoutMS: 45000, // Cerrar sockets después de 45s de inactividad
      bufferMaxEntries: 0, // Deshabilitar buffering de mongoose
      bufferCommands: false, // Deshabilitar buffering de mongoose
    });
    console.log('✅ Conectado a MongoDB exitosamente');
  } catch (err) {
    console.error('❌ Error conectando a MongoDB:', err.message);
    console.log('💡 Asegúrate de que MongoDB esté corriendo localmente o usa MongoDB Atlas');
    console.log('💡 Para instalar MongoDB localmente: https://docs.mongodb.com/manual/installation/');
    process.exit(1);
  }
};

connectDB();

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Lista de Tareas funcionando' });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
