const express = require('express')

const router = express.Router()

// const {
//     checkContactById,
//     validateCreatedContact,
//     validateEditedContact,
// } = require('../../middlewares');

const {
    getContactsController,
    getContactByIdController,
    createContactController,
    deleteContactController,
    // editeContactController,
} = require('../../controllers/contactsControllers');

// router.use('/:contactId', checkContactById)

router.get('/', getContactsController)

router.get('/:contactId', getContactByIdController)

router.post('/',
    // validateCreatedContact,
    createContactController)

router.delete('/:contactId', deleteContactController)

// router.put('/:contactId', validateEditedContact, editeContactController)

module.exports = router
