import * as React from 'react';
import merge from 'classnames';

import { AnyFunction } from '../../types/common';
import { InputChange } from '../../types/react';
import { SendBtn } from '../../components/send_btn';
import { PartItem } from '../../components/part-item';
// import { PartsModal } from '../../components/parts-modal';
import { HardcodedParts } from './hardcoded-data';
import { Part, Props, State } from './types';
import './styles.css';

export class CartridgeForm extends React.Component<Props, State> {
  public state: State = {
    cartridge_name: '',
    date: '',
    executor: '',
    paid_form: '',
    client: '',
    type_of_work: '',
    modalIsOpen: false,
    availableParts: HardcodedParts,
    selectedParts: [],
    shownAvailableParts: HardcodedParts.map((part: Part): Part => ({ ...part, visible: true })),
  };

  // Component variables

  // @ts-ignore
  private partsListReference: HTMLDivElement;

  // Component lifecycle methods

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.selectedParts.length > prevState.selectedParts.length && this.partsListReference) {
      this.partsListReference.scrollTop = this.partsListReference.scrollHeight;
    }
  }

  // Event handlers

  private onNameChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ cartridge_name: value }));
  };

  private onDateChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ date: value }));
  };

  private onExecutorChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ executor: value }));
  };

  private onPaidFormChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ paid_form: value }));
  };

  private onClientChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ client: value }));
  };

  private onTypeOfWorkChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ type_of_work: value }));
  };

  private onNewRefillButtonClick = (): void => {
    const { cartridge_name, date, executor, paid_form, client, type_of_work } = this.state;
    console.log({ cartridge_name, date, executor, paid_form, client, type_of_work });
    this.setState(() => ({ cartridge_name: '', date: '', executor: '', paid_form: '', client: '', type_of_work: '' }));
  };

  private toggleModal = (): void => {
    this.setState((prevState: State) => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  private onAddPartsClick = (targetPart: Part): AnyFunction => (): void => {
    this.setState((prevState: State) => ({
      modalIsOpen: false,
      shownAvailableParts: prevState.shownAvailableParts.map(
        // ===>>>>
        (part: Part): Part => (part.id === targetPart.id ? { ...part, visible: false } : part),
      ),
      selectedParts: [...prevState.selectedParts, targetPart],
    }));
  };

  // private onAddPartsClick2 = (targetPart: Part) : AnyFunction => () : void => {
  //   this.setState((prevState: State) => {
  //     const newSelectedParts = prevState.selectedParts.slice(); // es6 => [...prevState.selectedParts]
  //     newSelectedParts.push(targetPart);
  //
  //     const newShowAvailableParts = [];
  //     // <<<<<===
  //     for (let i = 0; i < prevState.shownAvailableParts.length; i++) {
  //       if (prevState.shownAvailableParts[i].id === targetPart.id){
  //         const temporaryPart = Object.assign({}, prevState.shownAvailableParts[i]); // es6 => {...prevState.showAvailableParts[i]}
  //         temporaryPart.visible = false;
  //         newShowAvailableParts.push(temporaryPart);
  //       } else {
  //         newShowAvailableParts.push(prevState.shownAvailableParts[i])
  //       }
  //     }
  //
  //     return {
  //       modalIsOpen : false,
  //       shownAvailableParts: newShowAvailableParts,
  //       selectedParts: newSelectedParts,
  //     };
  //
  //   })
  // };
  private onPartAmountChange = (code: string, amount: number): void => {
    this.setState((prevState: State) => ({
      selectedParts: prevState.selectedParts.map(
        (part: Part): Part => (part.code === code ? { ...part, amount } : part),
      ),
    }));
  };

  private onPartDelete = (targetPart: Part): AnyFunction => (): void => {
    this.setState((prevState: State) => ({
      selectedParts: prevState.selectedParts.filter((part: Part): boolean => part.id !== targetPart.id),
      shownAvailableParts: prevState.shownAvailableParts.map(
        (part: Part): Part => (part.id === targetPart.id ? { ...part, visible: true } : part),
      ),
    }));
  };

  // RENDER

  public render(): React.ReactNode {
    const {
      selectedParts,
      shownAvailableParts,
      cartridge_name,
      date,
      executor,
      paid_form,
      client,
      type_of_work,
      modalIsOpen,
    } = this.state;

    return (
      <div className="cartridge-form-container">
        <form className="coming-form" role="coming-form">
          <h2 className="coming-form">New cartridge refill</h2>
          <input
            className="form-control"
            placeholder="cartridge_name"
            value={cartridge_name}
            onChange={this.onNameChange}
          />
          <input className="form-control" placeholder="date" value={date} onChange={this.onDateChange} />
          <input className="form-control" placeholder="executor" value={executor} onChange={this.onExecutorChange} />
          <input className="form-control" placeholder="paid_form" value={paid_form} onChange={this.onPaidFormChange} />
          <input className="form-control" placeholder="client" value={client} onChange={this.onClientChange} />
          <input
            className="form-control"
            placeholder="type_of_work"
            value={type_of_work}
            onChange={this.onTypeOfWorkChange}
          />
          <SendBtn onClick={this.onNewRefillButtonClick}>
            <span>New Refill</span>
          </SendBtn>
        </form>
        <div className="parts-container">
          <button onClick={this.toggleModal}>Add parts</button>
          <div
            className={merge('parts-list', { bordered: selectedParts.length })}
            ref={(div: HTMLDivElement) => {
              this.partsListReference = div;
            }}
          >
            {selectedParts.map(
              (part: Part): JSX.Element => (
                <PartItem
                  key={part.code}
                  {...part}
                  onAmountChange={this.onPartAmountChange}
                  onDelete={this.onPartDelete(part)}
                />
              ),
            )}
          </div>
        </div>
        {/*<Modal centered isOpen={modalIsOpen} toggle={this.toggleModal}>*/}
        {/*<ModalBody>*/}
        {/*{shownAvailableParts.map(*/}
        {/*(part: Part): JSX.Element => (*/}
        {/*<PartsModal key={part.code} {...part} onClick={this.onAddPartsClick(part)} />*/}
        {/*),*/}
        {/*)}*/}
        {/*</ModalBody>*/}
        {/*</Modal>*/}
      </div>
    );
  }
}
