const { Router } = require("express");

const thoughtRouter = Router();

router.get("/", (req, res) => res.send("Hello World!"));
router.post("/", (req, res) => res.send({}));

module.exports = thoughtRouter;
