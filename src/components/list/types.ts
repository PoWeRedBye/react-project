import { AnyObject } from '../../types/common';

export interface Props {
  classes?: AnyObject;
  className?: string;
  list?: [];
  listUpdate(): void;
}

export interface State {
  list: Printers[];
}

export interface Printers {
  _id: string;
  printer_model: string;
  printer_serial_number: string;
  client: string;
  current_counter: number;
  previous_counter?: number;
  counters?: PrintersCounters[];
  __v: number;
}

export interface PrintersCounters {
  date: string;
  _id: string;
  counter: number;
  new_cartridge: boolean;
  new_fix_unit: boolean;
  new_oscillatory_node: boolean;
  new_rollers: boolean;
  new_maintenance: boolean;
  nothing: boolean;
}
