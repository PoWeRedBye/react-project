import { RouteProps } from "react-router-dom";

export interface Props extends RouteProps {
  isAuthorized: boolean;
}
