import { userSchema } from "Schemas";
import express from "express";
import { User } from "models";
import { IUser } from "types";
import { v4 as uuidv4 } from "uuid";

const signUp = async (req: express.Request, res: express.Response) => {
  const { body } = req;
  const validator = await userSchema(body);

  const { value: data, error } = validator.validate(body);

  if (error) {
    return res.status(422).json(error.details);
  }

  const { email, password } = data;
  const id = uuidv4();

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    const newUser: IUser = {
      id: id,
      email: email,
      password: password,
    };
    await User.create({ ...newUser });

    return res.status(201).json({ ...newUser });
  }

  return res
    .status(401)
    .json({ message: "please, provide correct credentials..." });
};

export default signUp;
