const express = require('express')

const router = express.Router()

const {
    listContacts,
    getContactById,
    // removeContact,
    // addContact,
    // updateContact,
} = require('../../models/contacts');

// ------------------------------------------------------------------------------------------------

/** MIDDLEWARES
 * Chek if user exists.
 */
// router.use('/:contactId', async (req, res, next) => {
//   const { contactId } = req.params;
//   const contactById = await getContactById(contactId);

//   if (!contactById) {
//     return res.status(404).json({
//       message: "Not found"
//     });
//   };

//   req.contact = contactById;

//   next();
// })

// router.get('/:contactId', (req, res, next) => {
//   const { contact } = req;
  
//   res.status(200).json(contact);
// })

// ------------------------------------------------------------------------------------------------

router.get('/', async (req, res, next) => {
  const allContacts = await listContacts();
  res.status(200).json(allContacts);
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const contactById = await getContactById(contactId);

  if (!contactById) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  
  res.status(200).json(contactById);
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
