export interface State {
  value: string;
  fieldName: string;
}
export interface Props {
  value: any;
  fieldName: any;
  disabled?: boolean;
  onChange?(value: string): void;
}
