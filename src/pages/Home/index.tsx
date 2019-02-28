import * as React from 'react';

// import { Table } from 'src/components/table';
import { Props, State } from './types';
import { SwipeNavigation } from '../../components/swipe_navigation';

export class HomePage extends React.Component<Props, State> {
  /*public state: State = {
    code: '',
    name: '',
  };
*/
  // Event handlers

  /*  private onCodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    this.setState(() => ({ code: value }));
  };

  private onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    this.setState(() => ({ name: value }));
  };

  private onRegisterProductButtonClick = (): void => {
    const { code, name } = this.state;
    console.log({ code, name });
    this.setState(() => ({code: '' , name: ''}))
  };*/

  // RENDER

  public render(): React.ReactNode {
    // const { code, name } = this.state;

    return <SwipeNavigation />;

    /* return <Table />;  тут табличка с наличием всех товаров три колонки 1:Артикул, 2:Имя, 3:Кол-во */
  }
}
