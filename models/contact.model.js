const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      default: "personal",
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
contactSchema.plugin(toJSON);
contactSchema.plugin(paginate);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
