// server/config/db.js
const mysql = require('mysql2');
require('dotenv').config();

// Criamos um "pool" de conexões, que é mais eficiente para o servidor
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportamos a promessa para podermos usar async/await no futuro
module.exports = pool.promise();