const { Router } = require("express");

const thoughtController = require("../controllers/thought");
const thoughtRouter = Router();

// thoughtRouter.get("/", thoughtController.show);
thoughtRouter.get("/:id", thoughtController.show);
thoughtRouter.post("/", thoughtController.create);

module.exports = thoughtRouter;
