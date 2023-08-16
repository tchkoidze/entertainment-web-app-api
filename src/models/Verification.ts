import mongoose from "mongoose";

const { Schema } = mongoose;

const verificationSchema = new Schema({
  hash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Verification = mongoose.model("Verification", verificationSchema);

export default Verification;
