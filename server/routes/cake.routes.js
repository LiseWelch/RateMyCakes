const cakeController = require("../controllers/cake.controller");

module.exports = app => {
    app.get("/api/cakes", cakeController.getAllCakes);
    app.get("/api/cakes/:id", cakeController.getOneCake);
    app.post("/api/cakes/new", cakeController.createCake);
    app.put("/api/cakes/update/:id", cakeController.updateCake);
    app.delete("/api/cakes/remove/:id", cakeController.deleteCake);
}