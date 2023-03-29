const express = require('express')

const router = express.Router()

const contactsControllers = require('../../controllers/contactsControllers')
const middlewares = require('../../middlewares')

// route '/'
router.use('/', middlewares.auth)

router.route('/')
    .get(contactsControllers.getContactsController)
    .post(
        middlewares.validateCreatedContact,
        contactsControllers.createContactController
    )

// route '/:contactId'
router.use('/:contactId', middlewares.checkContactById)

router.route('/:contactId')
    .get(contactsControllers.getContactByIdController)
    .delete(contactsControllers.deleteContactController)
    .put(
        middlewares.validateEditedContact,
        contactsControllers.editeContactController
    )
    
// route '/:contactId/favorite'
router.route('/:contactId/favorite')
    .patch(
        middlewares.validateEditedContactStatus,
        contactsControllers.statusContactController
    )

module.exports = router
