const { Router } = require("express");
const { displayIndex, displayMessage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", displayIndex);
indexRouter.get("/message/:messageIndex", displayMessage);

module.exports = indexRouter;