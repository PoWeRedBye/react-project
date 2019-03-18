import { Printer } from '../../../../types/models';

export interface Props {
  className?: string;
  search: string;
  printersList: Printer[];
  onSearchChange(value: string): void;
  onPrinterSelect(printer: Printer): void;
}
