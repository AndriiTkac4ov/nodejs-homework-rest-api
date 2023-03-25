const express = require('express')

const router = express.Router()

const usersControllers = require('../../controllers/usersControllers')

router.route('/register')
    .post(
        // contactsMiddlewares.validateCreatedContact,
        usersControllers.registerController
    )

module.exports = router