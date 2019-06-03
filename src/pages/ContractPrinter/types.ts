import { Printer } from 'src/types/models';

export interface Props {
  // From redux
  printers?: unknown[];
  getAllPrinters?(client: any, limit: any, page: any): void;
}

export interface State {
  printersList: Printer[];
  selectedPrinter: Printer | null;
  limit: number;
  page: number;
  toastMessage: string;
  toastIsOpen: boolean;
}
