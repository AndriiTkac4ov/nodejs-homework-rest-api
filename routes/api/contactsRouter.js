const express = require('express')

const router = express.Router()

const { checkContactById } = require('../../middlewares/contactsMiddlewares');

const {
    getContactsController,
    getContactByIdController,
    createContactController,
    deleteContactController,
    editeContactController,
} = require('../../controllers/contactsControllers');

// router.use('/:contactId', checkContactById)

router.get('/', getContactsController)

router.get('/:contactId', checkContactById, getContactByIdController)

router.post('/', createContactController)

router.delete('/:contactId', checkContactById, deleteContactController)

router.put('/:contactId', checkContactById, editeContactController)

module.exports = router
