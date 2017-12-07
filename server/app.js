const express = require('express')
const app = express()

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect()

app.get('/', function (req, res) {
    console.log('Page: /');
    res.send('Admin Homepage');
});

app.get('/posts', function (req, res) {
    console.log('Page: /posts');
    res.send('Posts');
});

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()

app.listen(3000, () => console.log('Example app listening on port 3000!'))