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
        password: hashPassword,
        salt: salt
    }).then(result => {
        res.redirect("/");
    })
})

router.get('/login', function (req, res, next) {
    res.render("login");
});

router.post("/login", async function(req,res,next){
    let body = req.body;

    let result = await models.user.findOne({
        where: {
            email : body.userEmail
        }
    });

    let dbPassword = result.dataValues.password;
    let inputPassword = body.password;
    let salt = result.dataValues.salt;
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    console.log(inputPassword + " " + hashPassword)
    if(dbPassword === hashPassword){
        console.log("비밀번호 일치");
        req.session.email = body.userEmail;
        res.redirect("/");
    }
    else{
        console.log("비밀번호 불일치");
        res.redirect("/auth/login");
    }
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.clearCookie('sid');

    res.redirect("/")
});

module.exports = router;
