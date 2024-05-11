import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  // message: {
  //   type: String,
  //   required: [true, "Message is required."],
  // },

  std: {
    type: String,
    required: [true, "Standard is required."],
  },

  sec: {
    type: String,
    required: [true, "Section is required."],
  },

  sex: {
    type: String,
    required: [true, "Sex is required."],
  },

  dob: {
    type: Date,
    required: [true, "Date of birth is required."],
  },

  roll: {
    type: String,
    required: [true, "Roll number is required."],
  },

  admno: {
    type: String,
    required: [true, "Admission number is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
