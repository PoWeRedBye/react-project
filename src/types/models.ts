export interface Printer {
  _id: string;
  printer_model: string;
  printer_serial_number: string;
  client: string;
  current_counter: number;
  previous_counter?: number;
  counters?: PrintersCounter[];
  __v: number;
}

export interface PrintersCounter {
  date: string;
  _id: string;
  counter: number;
  new_cartridge: boolean;
  new_fix_unit: boolean;
  new_oscillatory_node: boolean;
  new_rollers: boolean;
  new_maintenance: boolean;
  nothing: boolean;
}

export interface User {
  email: string,
  displayName: string,
}

//TODO: {FIX} need create more interest model
export interface PolygraphyCard {
  _id: string;
  card_name: string;
  card_image: string;
  typed_count: string;
  typed_price: string;
}
