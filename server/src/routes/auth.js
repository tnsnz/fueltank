var express = require('express');
const crypto = require('crypto');
var router = express.Router();
const models = require("../models");

var cors = require("cors");
router.use(cors());

router.get('/sign_up', function (req, res, next) {
    res.render('signup');
});

router.post("/sign_up", function (req, res, next) {
    let body = req.body;

    let inputPassword = body.password;
    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    models.user.create({
        name: body.userName,
        email: body.userEmail,
        password: hashPassword
    }).then(result => {
        res.redirect("/");
    })
})

router.get('/login', function (req, res, next) {
    res.render("login");
});


module.exports = router;
