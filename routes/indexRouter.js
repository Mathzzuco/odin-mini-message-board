const { Router } = require("express");
const { displayIndex } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", displayIndex);

module.exports = indexRouter;