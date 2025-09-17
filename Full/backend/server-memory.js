const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoMemoryServer } = require('mongodb-memory-server');

// Importar rutas
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar MongoDB en memoria para desarrollo
let mongoServer;

const startServer = async () => {
  try {
    // Iniciar MongoDB en memoria
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    console.log('🚀 Iniciando MongoDB en memoria...');
    
    // Conectar a MongoDB en memoria
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Conectado a MongoDB en memoria exitosamente');
    
    // Rutas
    app.use('/api/auth', authRoutes);
    app.use('/api/tasks', taskRoutes);
    
    // Ruta de prueba
    app.get('/', (req, res) => {
      res.json({ 
        message: 'API de Lista de Tareas funcionando',
        database: 'MongoDB en memoria',
        status: 'Desarrollo'
      });
    });
    
    // Middleware de manejo de errores
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ message: 'Algo salió mal!' });
    });
    
    app.listen(PORT, () => {
      console.log(`🎉 Servidor corriendo en puerto ${PORT}`);
      console.log(`📊 Base de datos: MongoDB en memoria`);
      console.log(`🌐 URL: http://localhost:${PORT}`);
    });
    
  } catch (error) {
    console.error('❌ Error iniciando servidor:', error);
    process.exit(1);
  }
};

// Manejar cierre graceful
process.on('SIGINT', async () => {
  console.log('\n🛑 Cerrando servidor...');
  if (mongoServer) {
    await mongoServer.stop();
    console.log('✅ MongoDB en memoria cerrado');
  }
  process.exit(0);
});

startServer();
