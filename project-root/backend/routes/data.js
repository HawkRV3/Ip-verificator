const express = require('express');
const router = express.Router();

// Ruta para otras funcionalidades de datos
router.get('/info', (req, res) => {
    res.json({ message: 'Ruta de datos funcionando' });
});

module.exports = router;
