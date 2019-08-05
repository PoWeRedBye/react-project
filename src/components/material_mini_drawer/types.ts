// TODO: move to separate file
import { AnyObject } from 'src/types/common';

export interface Props {
  // Parent
  classes: AnyObject;
  isOpen: boolean;
  // @connect
  isAuthorized: boolean,
  userLogout(): void;
}

export interface State {
  open: boolean;
}
