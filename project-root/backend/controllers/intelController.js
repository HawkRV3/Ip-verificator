const axios = require('axios');

// Controlador para manejar la verificación de IP
const checkIP = async (req, res) => {
    const ip = req.params.ip;
    const apiKey = process.env.API_KEY || 'vJ1aUHsanarkpAjlfrcR4HTi1pDgGqwl';
    
    try {
        const response = await axios.get(`https://www.blacklistmaster.com/restapi/v1/blacklistcheck/ip/${ip}?apikey=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al verificar la IP');
    }
};

module.exports = { checkIP };
