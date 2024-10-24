const express = require('express');
const axios = require('axios');
const router = express.Router();

// Cargar clave de BlacklistMaster desde el archivo .env
const BLACKLIST_API_KEY = process.env.BLACKLIST_API_KEY;
// Cargar clave de AbuseIPDB desde el archivo .env
const ABUSEIPDB_API_KEY = process.env.ABUSEIPDB_API_KEY;

// Función para consultar BlacklistMaster
async function checkBlacklistMaster(ip) {
    try {
        const url = `https://www.blacklistmaster.com/restapi/v1/blacklistcheck/ip/${ip}?apikey=${BLACKLIST_API_KEY}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error verificando IP en BlacklistMaster: ${error}`);
        return { error: 'Error al verificar en BlacklistMaster' };
    }
}

// Función para consultar ipinfo.io
async function checkIpInfo(ip) {
    try {
        const url = `https://ipinfo.io/${ip}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error obteniendo información de ipinfo.io: ${error}`);
        return { error: 'Error al verificar en ipinfo.io' };
    }
}

// Función para consultar AbuseIPDB
async function checkAbuseIPDB(ip) {
    try {
        const url = `https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`;
        const response = await axios.get(url, {
            headers: {
                'Key': ABUSEIPDB_API_KEY,
                'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error verificando IP en AbuseIPDB: ${error}`);
        return { error: 'Error al verificar en AbuseIPDB' };
    }
}

// Ruta para manejar consultas de IP en todas las APIs
router.get('/check/:ip', async (req, res) => {
    const ip = req.params.ip;

    try {
        const blacklistMasterData = await checkBlacklistMaster(ip);
        const ipInfoData = await checkIpInfo(ip);
        const abuseIPDBData = await checkAbuseIPDB(ip);

        res.json({
            blacklistMaster: blacklistMasterData,
            ipInfo: ipInfoData,
            abuseIPDB: abuseIPDBData
        });
    } catch (error) {
        console.error(`Error en la verificación: ${error}`);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

module.exports = router;
