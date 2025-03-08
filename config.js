const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV246qSBT9l3rVPnJVNOlkkEbEC4iKt8l5KKHAQi4lVYDY8d8naHdOZ5JzpoenSkGtvWqttTfvIM0wRVNUg8E7IDkuIUPNktUEgQEYFkGActAGPmQQDAAc6TdKd1NTeYPaUnE3gqLNd1o07YrG5LYYvnF1K8uS1BG9V3BvA1IcY+z9AfB2cYx03drd5kk1ykqRS06706QQznHWTUhUp5Is9wgvSmvuFdwbRIhznIY6OaEE5TCeonoBcf49+vqE7+9qrWXsChv2pGUoCQd6HdKsMnPb0WWO0c0sSfJQV79H3w1C9TYMwggdDuMq1QxHHOYzvpgz88pqTYzfbOPgleO+Tp/0KQ5T5Js+Shlm9bd1n1rwfIu9aTJeqct6tsqmVOmQElMuzN8c4Rol2zgJEkkRuO8RT510KvgbqkSjaqFxJI3tDt+/1SSo9Ysx6V7Ltf0WLQtSz78SX+SfWTn/H92rebXoTcls1bcOXnTas+GGijO+kOqDdlnPA3FzOlfDRFD48Hv0l7JjHo4e3++/yTtjf53OF4nWtTeJXS6Ly6R72Bembyv7iuN+0YesyP/E0upl1nwDK5gmSFdRayhrCyVr2X5rJB+sdaUbLr8zZpvwIFiVbI5Ef11P8fiWHU3dF42JrBjKwu5no3BHjnYydHtUOzmvjxudUW36YMDf2yBHIaYshwxnabOnSG0A/XKFvByxh7pgNOrc6mBCbnZKpLpYcjM+L3ReM0s8tNZbBh2xMM5FaF/UV9AGJM88RCnyx5iyLK/niFIYIgoGf/9sgxRd2dO3pprIt0GAc8rctCBxBv1PUz9fQs/LipSt6tTTmgXKwYD7tY0Yw2lIGxmLFObeCZdIO0FGwSCAMUX3NvBRiT3U4AFUM3I5Zf5Sg+r2vKuGEHKZ2lA+ZenzEymQBFmB0gvscfKLJHvSiyIq8EU++t1ul/NkH0qgDfBHyzRnfuvgzCSnsUsvZivV9ZWIZMe25zk9UKI8XHhKj3LkgwHLC9QGR+idC7LOzij9A24sy3l8RuOo8Fv9mFBb7M0dipeTufMF92kpGLz/GlNa5jd41mTOb6baELRB8kggbm4uyFKPl2SxJ0jioNv9i/6oGiEhIT9SxBrcD9GbEz5iEMcUDIBm54uSKWN91m3RXDIMdR+qWtio+mnSZ9ifaXLpARnxcq/1XW92iES35OTC9JeaXAf2osNXS7EiuFquNo80/RsEDMCxdzF9S03gdo9PZazLlsZZkb2YdHvXLreVmSU4x0CMJr0U3jZ8x9qs8KrlrsoVlLYOvbiKYXF7IQ6Hri5Wl/S4iq9v1WtT7RmWr8WiyD/ub3uyrq3a4KOV21ufJrUKA4v0+UncCbRJLo5MeSmbayzyW/mY6cHFglqrC01BirzFLTLdREwktLY7uDpkNxurzzZ8jIH4Y/ziR4e8f0QrwOgxzVLYWPRf5nxNOXdvf8H4mI+/SdJwMzN2J+Ju1XIz1oR9n5/17SMeu07hpbeo0/d0X5nuqe7GDrjff7YBiSELsjxp/r6pn2fYB20QQ8rUX426xgmiDCYEDPiexEtdUewJbZDUKiErBtlnfwO1eXQUgfs/TLnPwPoHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "C-jay",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

