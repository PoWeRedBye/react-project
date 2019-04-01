import { ContractPrintersCounter } from 'src/endpoints/printer/contract/types';

export interface Props {
  open: boolean;
  handleClose(): void;
  handleSubmit(payload: ContractPrintersCounter): void;
  className?: string;
  serialNumber: string;
}

export interface State {
  value: string;
  printer_serial_number: string;
  counter: number;
  new_cartridge: boolean;
  new_fix_unit: boolean;
  new_oscillatory_node: boolean;
  new_rollers: boolean;
  new_maintenance: boolean;
  nothing: boolean;
}
