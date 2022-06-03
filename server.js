const express = require("express");

const app = express();

// parse request of content-type: application/json
app.use(express.json());

//  routes
require("./app/routes/customer.routes.js")(app);
require("./app/routes/users.routes.js")(app);

// set port, listen for requests
app.listen(3000, () =>  {
    console.log("Server is runing on port 3000");
});

