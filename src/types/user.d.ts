interface IUser {
  email: string;
  password: string;
  id: string;
  backLink?: string;
  verify: boolean;
}

export default IUser;
