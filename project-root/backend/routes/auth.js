const express = require('express');
const router = express.Router();

// Ruta de autenticación de ejemplo
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Aquí iría la lógica de autenticación
    res.json({ success: true, message: 'Autenticación exitosa' });
});

module.exports = router;
