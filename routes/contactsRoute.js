import { addContact, getAllContacts, updateContact, deleteContact } from "../controller/contactsController.js";
import auth from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.get("/", auth, getAllContacts);

router.post("/add", auth, addContact);

router.patch("/update/:id", auth, updateContact);

router.delete("/delete/:id", auth, deleteContact);

export default router;
