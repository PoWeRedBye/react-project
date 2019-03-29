export interface Props {
  open: boolean;
  handleClose(): void;
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
