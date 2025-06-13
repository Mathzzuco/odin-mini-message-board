const { messages } = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const displayIndex = (req, res) => {
  res.render("indexPage", { title: "Mini Messageboard", messages: messages });
}

const displayMessage = (req, res) => {
  if (req.params.messageIndex < messages.length && req.params.messageIndex > -1) {
    res.render("messagePage", { title: "Message Details", message: messages[req.params.messageIndex] });
  } else {
    throw new CustomNotFoundError("Message not found");
  }
}

module.exports = { displayIndex, displayMessage };