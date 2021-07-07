module.exports = app => {
    // require controller customer
    const customers = require("../controllers/customer.controller.js");

    // Create a new customer
    app.post("/customers", customers.create);

    // Retriev all customers
    app.get("/customers", customers.findAll);

    // Retrieve a single customer with customerID
    app.get("/customers/:customerId", customers.findOne);

    // update a customer with customerId
    app.put("/customers/:customerId", customers.delete);

    // delete all customer
    app.delete("/customers/:customerId", customers.deleteAll);
}

