document.getElementById('blacklist-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const ip = document.getElementById('ip').value;
    console.log('Consultando Blacklists para IP:', ip);

    const response = await fetch(`/api/blacklist-check/${ip}`);
    const result = await response.json();
    console.log('Resultado de Blacklists:', result);

    document.getElementById('results').innerHTML = `
        <h3>Resultados para ${ip} en Blacklists:</h3>
        <pre>${JSON.stringify(result, null, 2)}</pre>
    `;
});

document.getElementById('abuseipdb-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const ip = document.getElementById('abuseipdb-ip').value;
    console.log('Consultando AbuseIPDB para IP:', ip);

    const response = await fetch(`/api/abuseipdb-check/${ip}`);
    const result = await response.json();
    console.log('Resultado de AbuseIPDB:', result);

    document.getElementById('results').innerHTML = `
        <h3>Resultados para ${ip} en AbuseIPDB:</h3>
        <pre>${JSON.stringify(result, null, 2)}</pre>
    `;
});

document.getElementById('ipinfo-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const ip = document.getElementById('ipinfo-ip').value;
    console.log('Consultando IPInfo para IP:', ip);

    const response = await fetch(`/api/ipinfo-check/${ip}`);
    const result = await response.json();
    console.log('Resultado de IPInfo:', result);

    document.getElementById('results').innerHTML = `
        <h3>Resultados para ${ip} en IPInfo:</h3>
        <pre>${JSON.stringify(result, null, 2)}</pre>
    `;
});
