import React from 'react';
//Material
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Props, State } from './types';
import styles from './ListComponent.module.scss';

export class ListComponent extends React.Component<Props, State> {
  state: State = {
    list: [],
  };

  public selectItem = ():void => {

  };

  render() {
    const { list } = this.state;
    return (
      <List classes={{root: styles.root}}>
        {list.map(item => (
          <ListItem button onClick={this.selectItem}>
            <ListItemText primary={`Model: ${item.printer_model}`} />
            <ListItemText secondary={`S/N: ${item.printer_serial_number}`} />
            <ListItemText secondary={`Client: ${item.client}`} />
          </ListItem>
        ))}
      </List>
    );
  }
}
