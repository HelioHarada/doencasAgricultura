const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'mysql.tecinfoseguranca.com.br',
    port: '3306',
    user: 'tecinfoseg_add1',
    password :'helio123',
    database : 'tecinfoseguran' 
})

module.exports = conexao