import { Credentials } from "src/endpoints/user/types";

export interface Props {
  userLogin(payload: Credentials): void;
}

export interface State {
  email: string;
  password: string;
}
