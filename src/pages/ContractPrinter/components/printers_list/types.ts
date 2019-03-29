import { Printer } from 'src/types/models';

export interface Props {
  className?: string;
  printersList: Printer[];
  onSearchChange(value: string): void;
  onPrinterSelect(printer: Printer): void;
}
