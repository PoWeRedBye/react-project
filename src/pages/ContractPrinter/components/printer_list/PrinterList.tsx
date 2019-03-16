import React from 'react';
//Material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import classNames from 'classnames';

import { Props } from './types';
import { SearchInput } from "../../../../components/search_input";
import { ListComponent } from "../../../../components/list";
import { Axios } from "../../../../services/Axios";
import { InputChange } from "../../../../types/react";

export class PrinterList extends React.Component<Props> {

  public getList = ():void => {
    Axios.POST('/printer/contract/getAllContractPrinterByClient', {
      //TODO: need, add token in header!!!
      client: this.onSearchChange,
    }).then((response: any) => {
      //TODO: response parsing
    }).catch((error: any) => {
        console.log(error);
      });
  };

  private onSearchChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ search: value }));
  };

  render() {
    return (
      <Card
        classes={{
          root: classNames(this.props.className),
        }}
      >
        <CardContent>
          <SearchInput value="" onChange={() => this.onSearchChange} />
          <ListComponent selectItem={this.getList}/>
        </CardContent>
      </Card>
    );
  }
}
