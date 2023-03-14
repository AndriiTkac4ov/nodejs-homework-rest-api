const express = require('express')

const router = express.Router()

const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
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

// router.delete('/:contactId', async (req, res, next) => {
//   const { contact } = req;
//   await removeContact(contact.id);

//   res.status(200).json({ message: "contact deleted" });
// })

// router.put('/:contactId', async (req, res, next) => {
//   const { contact } = req;

//   if (Object.keys(req.body).length === 0) {
//     res.status(400).json({ "message": "missing fields" });
//     return;
//   }

//   const updatedContact = await updateContact(contact.id, req.body);

//   res.status(200).json(updatedContact);
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
  const newContact = await addContact(req.body);
  
  res.status(201).json(newContact);
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const contactById = await removeContact(contactId);

  if (!contactById) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json({ message: "contact deleted" });
})

router.put('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ "message": "missing fields" });
    return;
  }

  const updatedContact = await updateContact(contactId, req.body);

  if (!updatedContact) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json(updatedContact);
})

module.exports = router
