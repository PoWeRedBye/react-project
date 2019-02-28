export interface Part {
  id: string;
  code: string;
  name: string;
  amount: number;
  visible?: boolean;
}

export interface Props {}

export interface State {
  cartridge_name: string;
  date: string;
  executor: string;
  paid_form: string;
  client: string;
  type_of_work: string;
  fetchingAvailablePartsFromServer?: boolean; // default: true - for loader
  availableParts: Part[];
  shownAvailableParts: Part[];
  selectedParts: Part[];
  modalIsOpen: boolean;
}

/*

1. componentDidMount -> make a request to get parts from the server
  1.1 пока запрос в процессе в кнопка доавления неактивна и с лоадером
1. юзер кликнул на "открыть модалку"
2. открылась модалка { isModalOpen true }
  2.2 если availableParts.length = 0 => сказать что ничего нету на сервере
  2.3 иначе нарисовать список availableParts

200 {}
429 {

}

*/
