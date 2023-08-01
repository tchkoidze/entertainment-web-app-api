import { userSchema } from "Schemas";
import express from "express";
import { User } from "models";
import { ILogin, IUser } from "types";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async (req: express.Request, res: express.Response) => {
  console.log("error?");
  const { body } = req;
  console.log(345);

  // Log the incoming request body
  console.log("Request Body:", body);

  const validator = await userSchema(body);

  const { value: data, error } = validator.validate(body);
  console.log(78);
  if (error) {
    // Log the validation error details
    console.log("Validation Error:", error.details);
    return res.status(422).json(error.details);
  }
  console.log(79);

  const { email, password } = data;
  //const id = uuidv4();

  const user = await User.findOne({ email }).select("+password");
  console.log(user, "/?");
  if (!user) {
    const salt = 10;

    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(hashedPassword);

    const id = uuidv4();

    const newUser: IUser = {
      id: id,
      email: email,
      password: hashedPassword,
    };
    await User.create({ ...newUser });
    // Log the created user data
    console.log("New User Created:", newUser);

    return res.status(201).json({ newUser });
  }

  return res
    .status(401)
    .json({ message: "please, provide correct credentials..." });
};

const getUserLogin = async (req: express.Request, res: express.Response) => {
  const { body } = req;
  console.log("body", body);

  //const user = await User.findOne({ email: body.email }).select("+password");
  //console.log(user);

  //if (body.email === user?.email && body.password === user?.password) {
  //  console.log("login succesfully");
  //  return res.status(201)
  //}

  try {
    const user = await User.findOne({ email: body.email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password." });
    }

    const isMatch = await bcrypt.compare(body.password, user.password);
    console.log(isMatch);

    if (body.email === user.email && isMatch) {
      console.log("login successfully");

      const token = jwt.sign(user.email, process.env.JWT_SECRET || "");
      return res.status(200).json({ message: "Login successful!", token });
    } else {
      console.log("error");
      return res.status(402).json({ message: "Incorrect email or password." });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export default { signUp, getUserLogin };
