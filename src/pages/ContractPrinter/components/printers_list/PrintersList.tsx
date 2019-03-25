import React from 'react';
import classNames from 'classnames';
//Material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { SearchInput } from '../../../../components/search_input';
import { ListComponent } from '../../../../components/list';
import { Props } from './types';
import styles from './PrintersList.module.scss';

export class PrintersList extends React.Component<Props> {
  render() {
    const { className, printersList, onSearchChange, onPrinterSelect } = this.props;

    return (
      <Card classes={{ root: classNames(className) }}>
        <CardContent classes={{ root: styles.content }}>
          <SearchInput onChange={onSearchChange} />
          <ListComponent items={printersList} onItemClick={onPrinterSelect} />
        </CardContent>
      </Card>
    );
  }
}
