import React from 'react';
//Material
import Card from '@material-ui/core/Card';
import classNames from 'classnames';

import { Props } from './types';

export class PrinterInfo extends React.Component<Props> {
  //RENDER
  render() {
    return (
      <Card
        classes={{
          root: classNames(this.props.className),
        }}
      >
        123
      </Card>
    );
  }
}
