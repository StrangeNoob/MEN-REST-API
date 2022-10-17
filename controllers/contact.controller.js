const httpStatus = require("http-status");

const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { contactService } = require("../services");

const createContact = catchAsync(async (req, res) => {
  const contact = await contactService.createContact(req.body);
  res.status(httpStatus.CREATED).send(contact);
});

const getContacts = catchAsync(async (req, res) => {
  const result = await contactService.queryContacts();
  res.send(result);
});

const updateContact = catchAsync(async (req, res) => {
  const contact = await contactService.updateContactById(
    req.params.contactId,
    req.body
  );
  res.send(contact, httpStatus.OK);
});

const deleteContact = catchAsync(async (req, res) => {
  await contactService.deleteContactById(req.params.contactId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};
