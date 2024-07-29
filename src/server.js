const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors()); // Para permitir requisições de qualquer origem

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ma_guide'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados');
});

app.get('/destinos', (req, res) => {
    let sql = 'SELECT * FROM destinos';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
