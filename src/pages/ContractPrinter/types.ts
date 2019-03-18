import { Printer } from '../../types/models';

export interface Props {}

export interface State {
  search: string;
  printersList: Printer[];
  selectedPrinter: Printer | null;
}
