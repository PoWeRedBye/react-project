export interface ContractPrinters {
  client?: string;
  limit: number;
  page: number;
}

export interface ContractPrintersCounter {
  printer_serial_number: string;
  counter: number,
  new_cartridge: boolean;
  new_fix_unit: boolean;
  new_oscillatory_node: boolean;
  new_rollers: boolean;
  new_maintenance: boolean;
  nothing: boolean;
}
