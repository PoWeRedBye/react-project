import { Printer } from '../../types/models';

export interface Props {
  items: Printer[];
  onItemClick(item: Printer): void;
}
