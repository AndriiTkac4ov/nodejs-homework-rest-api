const express = require('express')

const router = express.Router()

const controllers = require('../../controllers')
const middlewares = require('../../middlewares')

// route '/'
router.use('/', middlewares.auth)

router.route('/')
    .get(controllers.contacts.getContactsController)
    .post(
        middlewares.contacts.validateCreatedContact,
        controllers.contacts.createContactController
    )

// route '/:contactId'
router.use('/:contactId', middlewares.contacts.checkContactById)

router.route('/:contactId')
    .get(controllers.contacts.getContactByIdController)
    .delete(controllers.contacts.deleteContactController)
    .put(
        middlewares.contacts.validateEditedContact,
        controllers.contacts.editeContactController
    )
    
// route '/:contactId/favorite'
router.route('/:contactId/favorite')
    .patch(
        middlewares.contacts.validateEditedContactStatus,
        controllers.contacts.statusContactController
    )

module.exports = router
