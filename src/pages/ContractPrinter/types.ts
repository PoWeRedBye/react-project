import { Printer } from 'src/types/models';
import { ContractPrintersCounter } from 'src/endpoints/printer/contract/types';

export interface Props {
  // From redux
  printers: Printer[];
  getAllPrinters(client: any, limit: any, page: any): void;
  setNewContractPrinterCounters(payload: ContractPrintersCounter): void;
}

export interface State {
  printersList: Printer[];
  selectedPrinter: string | null;
  limit: number;
  page: number;
  toastMessage: string;
  toastIsOpen: boolean;
}
