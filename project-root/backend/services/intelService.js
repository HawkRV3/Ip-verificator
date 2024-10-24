const axios = require('axios');

const apiKey = 'vJ1aUHsanarkpAjlfrcR4HTi1pDgGqwl'; // API Key usada globalmente

// Diccionario para transformar URLs completas a abreviadas
const urlTransformations = {
    "http://www.anonmails.de/dnsbl.php": "anonmails.de/dnsbl.php",
    "http://antispam.imp.ch": "antispam.imp.ch",
    // ... Otras URLs
};

function transformUrl(fullUrl) {
    return urlTransformations[fullUrl] || fullUrl;
}

// Verificar la lista negra
async function checkBlacklist(ip) {
    const url = `https://www.blacklistmaster.com/restapi/v1/blacklistcheck/ip/${ip}?apikey=${apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data; // Retornar los datos obtenidos
    } catch (error) {
        console.error(`Error al verificar IP: ${ip} - ${error}`);
        throw new Error('Error al obtener los datos de la lista negra');
    }
}

function gatherResults(ip, data) {
    let blacklists = [];
    if (data.blacklists) {
        blacklists = data.blacklists.map(bl => transformUrl(bl.blacklist_url));
    }
    return blacklists.join('\n'); // Unir las URLs transformadas con saltos de línea
}

module.exports = {
    checkBlacklist,
    gatherResults
};
