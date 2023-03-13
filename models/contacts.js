const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.resolve('models/contacts.json')

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const listOfContacts = JSON.parse(data);

    return listOfContacts;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contactById = JSON.parse(data).find(contact => contact.id === contactId);

    return contactById;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

const removeContact = async (contactId) => {}

const addContact = async (body) => {}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
