import { Part } from '../../pages/CartridgeForm/types';

export interface Props extends Part {
  amount: number;
  onAmountChange(code: string, amount: number): void;
  onDelete(): void;
}

export interface State {
  amount: number;
}
