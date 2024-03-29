import mongoose from "mongoose";

import { ILogin } from "types";

const { Schema } = mongoose;

const loginSchema = new Schema<ILogin>({
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

const Login = mongoose.model("Login", loginSchema);

export default Login;
