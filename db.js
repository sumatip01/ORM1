var mysql = require('mysql');

function login() {
        return mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'orm-db',
            multipleStatements: true
        });
}

module.exports = login;