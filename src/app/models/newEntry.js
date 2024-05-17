import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },
  std: {
    type: Number,
    required: [true, "Standard is required."],
  },
  sec: {
    type: String,
    required: [true, "Section is required."],
  },
  gender: {
    type: String,
    required: [true, "Gender is required."],
    validate: {
      validator: function(value) {
        return value === "male" || value === "female";
      },
      message: "Gender must be either 'male' or 'female'.",
    },
  },
  dob: {
    type: String,
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
  totAmt: {
    type: Number,
    required: [true, "Total Amount is required."],
  },
  pendingAmt:{
    type:Number,
    required:[true, "Pending Amount is required"]
  },
  
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
