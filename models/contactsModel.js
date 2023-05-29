import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email address"],
    },
    phonenumber: {
      type: String,
      required: [true, "Please enter phone number"],
    },
    gender: {
      type: String,
      required: [true, "Please select the gender"],
    },
  },
  { timestamps: true }
);

const Contacts = mongoose.model("Contacts", contactSchema);

export default Contacts;
