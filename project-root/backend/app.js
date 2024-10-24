require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const apiRoutes = require('./routes/api'); // Cargar rutas desde el archivo de rutas
const authRoutes = require('./routes/auth'); // Cargar rutas de autenticación
const dataRoutes = require('./routes/data'); // Rutas adicionales

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde el frontend
app.use(express.static('frontend'));

// Rutas
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html'); // Servir la página principal
});

// Manejo de errores (opcional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Verificación de la API Key de BlacklistMaster
if (!process.env.BLACKLIST_API_KEY) {
    console.error('ERROR: BLACKLIST_API_KEY no está configurada en el archivo .env');
    process.exit(1); // Detener la aplicación si la clave API no está configurada
}

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

