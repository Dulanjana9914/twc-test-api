import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter email address"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      min: 8,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
