const express = require("express")
const router = express.Router()

const messages = require("../Messages")

router.get("/", (req, res) => {
    res.render("form")
})

router.post("/", (req, res) => {
    messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
    res.redirect("/")
})

module.exports = router