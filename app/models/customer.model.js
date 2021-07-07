const sql = require("../db.js");

// constructor 
const Customer = function(customer) {
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
};

Customer.create = (newCustomer, result) => {
    sql.query("INSERT INTO customers SET ?", newCustomer, (err, res)  => {
        if(err) {
            console.log("error ", err);
            result(err, null);
            return;
        }

        console.log("Created customer: ", {id: res.insertId, ...newCustomer});
        result(null, {id: res.insertId, ...newCustomer});
    })
};

Customer.findById = (customerId, result) => {
    sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }

         // not found Customer with the id
        result({ kind: "not_found" }, null);

    })
};

// get all custommer
Customer.getAll = result => {
    sql.query("SELECT * FROM customers", (err, res) => {
        if(err) {
            console.log("erro :", err);
            result(null, err);
            return;
        }

        console.log("customers: ", res);
        result(null, res);

    })
}

// update customer by id
Customer.updateById = (id, customer, result) => {
    sql.query(
        "UPDATE customers SET email=?, name=?, active=? WHERE id=?",
        [customer.email, customer.name, customer.active, id],
        (err, res) => {
            if(err) {
                console.log("Erro : ", err); 
                result(null, err);
                return;
            }

            if(res.affectedRows == 0) {
                // not found customer with the id,
                result({kind: "Not found"}, null);
                return;
            }

            console.log("Updated customer: ", {id:id, ...customer});
            result(null, {id:id, ...customer});
        }
    )
};

// remove custom using id
Customer.remove = (id, result) => {
    sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted customer with id: ", id);
        result(null, res);
    });
};


// remove all customers
Customer.removeAll = result => {
    sql.query("DELETE FROM customers", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} customers`);
        result(null, res);
    });
};

module.exports = Customer;


