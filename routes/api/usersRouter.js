const express = require('express')

const router = express.Router()

const controllers = require('../../controllers')
const middlewares = require('../../middlewares')

router.route('/register')
    .post(
        middlewares.validateUserRegistration,
        controllers.registerController,
    )
    
router.route('/login')
    .post(
        middlewares.validateUserLogin,
        controllers.loginController,
    )

// router.route('/logout')
//     .post(
//         middlewares.validateUserLogout,
//         controllers.logoutController,
//     )

router.route('/current')
    .get(
        middlewares.auth,
        controllers.currentUserController,
    )

module.exports = router