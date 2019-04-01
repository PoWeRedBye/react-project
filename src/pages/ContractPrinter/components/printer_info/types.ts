import { Printer } from 'src/types/models';
import { ContractPrintersCounter } from 'src/endpoints/printer/contract/types';

export interface Props {
  className?: string;
  printer: Printer | null;
  onAddNewCounterToPrinter(payload: ContractPrintersCounter): void;
}

export interface State {
  modalIsOpen: boolean;
}
