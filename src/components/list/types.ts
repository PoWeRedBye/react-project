import { ContractPrinter } from "../../pages/ContractPrinter";

export interface Props {
  // className?: string;
  list?: ContractPrinter[];
  selectItem():void;
}

export interface State {
  list: ContractPrinter[];
}
