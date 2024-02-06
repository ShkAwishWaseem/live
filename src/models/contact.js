const mongoose = require('mongoose');
const { createHmac, randomBytes } = require("crypto");


const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const contactSchema = new Schema(
  {
       email: {
         type: String,
         required: true,
         unique:false
       },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
    mongoose.models.contact || mongoose.model('contact', contactSchema);