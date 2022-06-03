const sql = require("../db");

// constructor

const User = function(user) {
    this.username = user.username;
    this.email = user.email,
    this.password = user.password
}


/**
 * Create an user 
 */ 

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if(err) {
            console.log("Error :", err);
            result(err, null);
            return ;
        }

        console.log("User is created: ", {id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser});
    })
}