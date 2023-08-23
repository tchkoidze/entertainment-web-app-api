import Joi from "joi";
import { User } from "models";
import { IUser } from "types";

const chekIfUserExists =
  (user: IUser | null) => (value: string, helpers: any) => {
    if (user) {
      return helpers.message("user already exists");
    }

    return value;
  };

const userSchema = async (data: IUser) => {
  const finedUser = await User.findOne({ email: data.email });
  return Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ge"] } })
      .required()
      .messages({
        "string.base": "email should be a string",
        "string.email": "email should be a valid email address",
        "any.required": "email is required",
      }),
    password: Joi.string()
      .min(8)
      .pattern(/^(?=.*[A-Z])(?=.*[a-zA-Z0-9!,-_.]).*$/)
      .custom(chekIfUserExists(finedUser))
      .required()
      .messages({
        "string.base": "password should be a string",
        "string.min": "password should consist of minimum 8 characters",
        "string.pattern":
          "password must start with a capital letter and can contain letters, digits, and characters like !, -, _, and .",
        "string.required": "password isrequired",
      }),
    backLink: Joi.string().uri().required(),
  });
};

export default userSchema;
