import Contacts from "../models/contactsModel.js";

//Save
export const addContact = async (req, res) => {
  try {
    const { fullname, email, phonenumber, gender } = req.body;
    const newContact = new Contacts({
      fullname,
      email,
      phonenumber,
      gender,
    });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//Show All
export const getAllContacts = async (req, res) => {
  try {
    const getall = await Contacts.find();
    res.status(200).json(getall);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update
export const updateContact = async (req, res) => {
  try {
    const { fullname, email, phonenumber, gender } = req.body;
    await Contacts.findOneAndUpdate(
      { _id: req.params.id },
      {
        fullname,
        email,
        phonenumber,
        gender
      }
    );

    res.json({ msg: "Update Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//Delete
export const deleteContact = async (req, res) => {
  try {
    await Contacts.findByIdAndDelete(req.params.id);
    res.json({ msg: "Contact Deleted!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};