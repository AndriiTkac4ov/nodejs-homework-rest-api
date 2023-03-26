const express = require('express')

const router = express.Router()

const controllers = require('../../controllers')
const middlewares = require('../../middlewares')

router.route('/register')
    .post(
        middlewares.validateUserRegistration,
        controllers.registerController,
    )

module.exports = router