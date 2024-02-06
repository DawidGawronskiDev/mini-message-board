const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("form")
})

router.post("/", (req, res) => {
    messages.push({text: messageText, user: messageUser, added: new Date()});
    res.redirect("/")
})

module.exports = router