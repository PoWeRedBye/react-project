import { ToasterReducerState } from 'src/store/reducers/toaster';

export interface Props {
  config: ToasterReducerState;
  closeToaster(): void;
}
