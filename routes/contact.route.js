const express = require("express");

const router = express.Router();

const { contactController } = require("../controllers");

router
  .route("/")
  .get(contactController.queryContacts)
  .post(contactController.createContact);

router
  .route("/:contactId")
  .patch(contactController.updateContactById)
  .delete(contactController.deleteContactById);

module.exports = router;
