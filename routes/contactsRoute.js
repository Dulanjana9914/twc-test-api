import { addContact, getAllContacts, updateContact, deleteContact } from "../controller/contactsController.js";
import auth from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.get("/",  getAllContacts);

router.post("/add",  addContact);

router.patch("/update/:id",  updateContact);

router.delete("/delete/:id",  deleteContact);

export default router;
