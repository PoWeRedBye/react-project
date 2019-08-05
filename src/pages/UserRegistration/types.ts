import { UserCredentials } from "src/endpoints/user/types";

export interface Props {
  userRegister(payload: UserCredentials): void;
}

export interface State {
  login: string;
  email: string;
  password: string;
}
