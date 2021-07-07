const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DBNAME, 
});

// open the Mysql connection
connection.connect(error => {
    if(error) throw error;
    console.log("Successfully connected to the databse");
});


module.exports = connection;