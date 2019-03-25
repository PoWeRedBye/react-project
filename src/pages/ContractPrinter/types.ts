import { Printer } from '../../types/models';

export interface Props {}

export interface State {
  printersList: Printer[];
  selectedPrinter: Printer | null;
  limit: number;
  page: number;
}
