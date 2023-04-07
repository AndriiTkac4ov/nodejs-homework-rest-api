const express = require('express')

const router = express.Router()

const controllers = require('../../controllers')
const middlewares = require('../../middlewares')

router.route('/register')
    .post(
        middlewares.users.validateUserRegistration,
        controllers.users.registerController,
    )
    
router.route('/verify/:verificationToken')
    .get(
        controllers.users.verifyEmailController,
    )

router.route('/login')
    .post(
        middlewares.users.validateUserLogin,
        controllers.users.loginController,
    )

router.route('/logout')
    .post(
        middlewares.auth,
        controllers.users.logoutController,
    )

router.route('/current')
    .get(
        middlewares.auth,
        controllers.users.currentUserController,
    )
    
router.route('/avatars')
    .patch(
        middlewares.auth,
        middlewares.upload.single('avatar'),
        controllers.users.updateAvatarController,
    )

module.exports = router