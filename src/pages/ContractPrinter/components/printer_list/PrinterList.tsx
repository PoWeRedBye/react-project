import React from 'react';
//Material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import classNames from 'classnames';

import { Props } from './types';
import { SearchInput } from "../../../../components/search_input";

export class PrinterList extends React.Component<Props> {
  render() {
    return (
      <Card
        classes={{
          root: classNames(this.props.className),
        }}
      >
        <CardContent>
          <SearchInput value="" onChange={() => {}} />
          <div>list</div>
        </CardContent>
      </Card>
    );
  }
}
