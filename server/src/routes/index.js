var express = require('express');
var router = express.Router();
var cors = require("cors");

router.use(cors());
/* GET home page. */
router.get('/', function (req, res, next) {
    var session = req.session;
    res.render('index', {
        title: 'Express',
        session: session
    });
});

const auth = require('./auth');
router.use('/auth', auth);

module.exports = router;
