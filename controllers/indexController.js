const { messages } = require("../db");

const displayIndex = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

module.exports = { displayIndex };