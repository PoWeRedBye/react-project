import { ContractPrinter } from "../../pages/ContractPrinter";
import { AnyObject } from "../../types/common";

export interface Props {
  classes?: AnyObject
  className?: string;
  list?: [];
  selectItem():void;
}

export interface State {
  list: Printers[];
}


export interface Printers {
  printer_model: string,
  printer_serial_number: string,
  client: string;
}
