const httpStatus = require("http-status");
const { Contact } = require("../models");

const createContact = async (contactBody) => {
  const contact = await Contact.create(contactBody);
  return contact;
};

const queryContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

const updateContactById = async (contactId, updateBody) => {
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, "Contact not found");
  }
  Object.assign(contact, updateBody);
  await contact.save();
  return contact;
};

const deleteContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, "Contact not found");
  }
  await contact.remove();
  return contact;
};

module.exports = {
  createContact,
  queryContacts,
  updateContactById,
  deleteContactById,
};
