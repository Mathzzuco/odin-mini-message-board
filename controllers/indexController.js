const { messages } = require("../db");

const displayIndex = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

const displayMessage = (req, res) => {
  res.render("message", { title: "Message Details", message: messages[req.params.messageIndex] });
}

module.exports = { displayIndex, displayMessage };