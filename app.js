import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
import contactsRoute from "./routes/contactsRoute.js";
import cors from "cors";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/contacts", contactsRoute);

app.listen(8070, () => {
  console.log("Server is running on port 8070");
});

