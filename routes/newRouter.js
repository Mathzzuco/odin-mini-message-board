const { Router } = require("express");
const { displayNew, postMessage } = require('../controllers/newController');

const newRouter = Router();

newRouter.get("/", displayNew);

newRouter.post("/", postMessage);

module.exports = newRouter;