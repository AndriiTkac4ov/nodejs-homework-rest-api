const express = require('express')

const router = express.Router()

const contactsControllers = require('../../controllers/contactsControllers')
const contactsMiddlewares = require('../../middlewares/contactsMiddlewares')

router.route('/')
    .get(contactsControllers.getContactsController)
    .post(
        contactsMiddlewares.validateCreatedContact,
        contactsControllers.createContactController
    )

router.use('/:contactId', contactsMiddlewares.checkContactById)

router.route('/:contactId')
    .get(contactsControllers.getContactByIdController)
    .delete(contactsControllers.deleteContactController)
    .put(
        contactsMiddlewares.validateEditedContact,
        contactsControllers.editeContactController
    )
    
router.route('/:contactId/favorite')
    .patch(
        contactsMiddlewares.validateEditedStatus,
        contactsControllers.statusContactController
    )

module.exports = router
