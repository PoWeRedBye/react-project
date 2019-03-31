import { Printer } from 'src/types/models';

export interface Props {
  items: Printer[];
  onItemClick(item: Printer): void;
}
