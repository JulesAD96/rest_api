module.exports = app => {
    const User = require("../controllers/users.controller.js");
    // require controller customer
    app.get("/register", User.register);

    app.post("/signin", User.signin);
}
