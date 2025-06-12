const { messages } = require("../db");

const displayNew = (req, res) => {
    res.render("new", {});
};

const postMessage = (req, res) => {
    messages.push({
        text: req.body.messageText,
        user: req.body.messageUser,
        added: new Date()
    });
    res.redirect("/");
};

module.exports = { displayNew, postMessage };