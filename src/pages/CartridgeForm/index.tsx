import React from 'react';
import classNames from 'classnames';

import { AnyFunction } from 'src/types/common';
import { InputChange } from 'src/types/react';
import { SendBtn } from 'src/components/send_btn';
import { PartItem } from 'src/components/part-item';
// import { PartsModal } from 'src/components/parts-modal';
import { HardcodedParts } from './hardcoded-data';
import { Part, Props, State } from './types';
import './styles.css';

export class CartridgeForm extends React.Component<Props, State> {
  state: State = {
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
  partsListReference: HTMLDivElement;

  // Component lifecycle methods

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.selectedParts.length > prevState.selectedParts.length && this.partsListReference) {
      this.partsListReference.scrollTop = this.partsListReference.scrollHeight;
    }
  }

  // Event handlers

  onNameChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ cartridge_name: value }));
  };

  onDateChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ date: value }));
  };

  onExecutorChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ executor: value }));
  };

  onPaidFormChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ paid_form: value }));
  };

  onClientChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ client: value }));
  };

  onTypeOfWorkChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ type_of_work: value }));
  };

  onNewRefillButtonClick = () => {
    const { cartridge_name, date, executor, paid_form, client, type_of_work } = this.state;
    console.log({ cartridge_name, date, executor, paid_form, client, type_of_work });
    this.setState(() => ({ cartridge_name: '', date: '', executor: '', paid_form: '', client: '', type_of_work: '' }));
  };

  toggleModal = () => {
    this.setState((prevState: State) => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  onAddPartsClick = (targetPart: Part): AnyFunction => () => {
    this.setState((prevState: State) => ({
      modalIsOpen: false,
      shownAvailableParts: prevState.shownAvailableParts.map(
        // ===>>>>
        (part: Part): Part => (part.id === targetPart.id ? { ...part, visible: false } : part),
      ),
      selectedParts: [...prevState.selectedParts, targetPart],
    }));
  };

  // onAddPartsClick2 = (targetPart: Part) : AnyFunction => ()  => {
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
  onPartAmountChange = (code: string, amount: number) => {
    this.setState((prevState: State) => ({
      selectedParts: prevState.selectedParts.map(
        (part: Part): Part => (part.code === code ? { ...part, amount } : part),
      ),
    }));
  };

  onPartDelete = (targetPart: Part): AnyFunction => () => {
    this.setState((prevState: State) => ({
      selectedParts: prevState.selectedParts.filter((part: Part): boolean => part.id !== targetPart.id),
      shownAvailableParts: prevState.shownAvailableParts.map(
        (part: Part): Part => (part.id === targetPart.id ? { ...part, visible: true } : part),
      ),
    }));
  };

  // RENDER

  render() {
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
            className={classNames('parts-list', { bordered: selectedParts.length })}
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
