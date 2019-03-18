import React from 'react';
import classNames from 'classnames';
//Material
import Card from '@material-ui/core/Card';

import { Props } from './types';

export class PrinterInfo extends React.Component<Props> {
  //RENDER

  render() {
    const { className, printer } = this.props;

    return (
      <Card classes={{ root: classNames(className) }}>
        {printer ? <pre>{JSON.stringify(printer, undefined, 2)}</pre> : 'Выберете принтер'}
      </Card>
    );
  }
}
