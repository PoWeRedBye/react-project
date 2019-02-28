import { Part } from '../../pages/CartridgeForm/types';

export interface Props extends Part {
  amount: number;
  onClick(): void;
}

export interface State {
  amount: number;
}
