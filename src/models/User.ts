import mongoose from "mongoose";

import { IUser } from "types";

const { Schema } = mongoose;

const userSchema = new Schema<IUser>({
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  id: { type: Schema.Types.String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
