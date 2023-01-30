var express = require('express');
var router = express.Router();

var cors = require("cors");
router.use(cors());

/**
 * @swagger
 * paths:
 *  /login:
 *   post:
 *    tags:
 *    - user
 *    description: login
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      schema:
 *       properties:
 *        id:
 *         type: string
 *        pw:
 *         type: string
 *
 *    responses:
 *     200:
 *      description: login success
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *     401:
 *      description: login fail
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *
 */

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
