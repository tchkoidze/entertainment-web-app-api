interface IUser {
  email: string;
  password: string;
  id: string;
  backLink?: string;
  avatar: string;
  verify: boolean;
}

export default IUser;
