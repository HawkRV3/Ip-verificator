// Diccionario de URLs completas a abreviadas
const urlTransformations = {
  "http://www.anonmails.de/dnsbl.php": "anonmails.de/dnsbl.php",
  "http://antispam.imp.ch": "antispam.imp.ch",
  "http://barracudacentral.org/rbl": "barracudacentral.org",
  "http://korea.services.net/": "korea.services.net/",
  "http://mxrbl.com/": "mxrbl.com/",
  "http://rbl.interserver.net/": "rbl.interserver.net/",
  "http://wiki.junkemailfilter.com/index.php/Spam_DNS_Lists": "wiki.junkemailfilter.com/index.php/Spam_DNS_Lists",
  "http://www.blockedservers.com/": "blockedservers.com/",
  "http://www.blocklist.de": "blocklist.de",
  "http://www.dnsbl.manitu.net/?language=en": "dnsbl.manitu.net/",
  "http://www.dronebl.org/": "dronebl.org/",
  "http://www.spamcop.net/": "spamcop.net/",
  "http://www.spamhaus.org": "spamhaus.org",
  "http://www.spamrats.com": "spamrats.com",
  "http://www.uceprotect.net/en/index.php": "uceprotect.net/en/index.php",
  "http://www.usenix.org.uk/wiki/RBL": "usenix.org.uk/wiki/RBL",
  "https://www.abuseat.org/": "abuseat.org/",
  "https://abusix.com/": "abusix.com/",
  "https://www.invaluement.com/#sip": "invaluement.com/",
  "https://www.invaluement.com/#sip24": "invaluement.com/",
  "https://www.spamhaus.org/zen/": "spamhaus.org/zen/",
  "https://www.talosintelligence.com/reputation": "talosintelligence.com/reputation",
  "http://justspam.org": "justspam.org",
  "http://mailspike.org/": "mailspike.org/"
};

// Función para transformar la URL completa a su forma abreviada
const transformUrl = (fullUrl) => {
  return urlTransformations[fullUrl] || fullUrl;
};

module.exports = { transformUrl };
