const express = require('express')

const router = express.Router()

const {
    checkContactById,
    validateCreateContact,
    validateEditeContact,
} = require('../../middlewares');

const {
    getContactsController,
    getContactByIdController,
    createContactController,
    deleteContactController,
    editeContactController,
} = require('../../controllers/contactsControllers');

router.use('/:contactId', checkContactById)

router.get('/', getContactsController)

router.get('/:contactId', getContactByIdController)

router.post('/', validateCreateContact, createContactController)

router.delete('/:contactId', deleteContactController)

router.put('/:contactId', validateEditeContact, editeContactController)

module.exports = router
