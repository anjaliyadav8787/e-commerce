const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password: "anjali@123",
    database:"ecommerce2"
})

module.exports = connection