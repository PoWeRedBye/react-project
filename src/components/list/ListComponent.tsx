import React from 'react';
//Material
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import { hardcodedPrinters } from './hardcoded-data';



import { Props, State, Printers } from './types';
import styles from './ListComponent.module.scss';

export class ListComponent extends React.Component<Props, State, Printers> {
  state: State = {
    list: hardcodedPrinters,
  };

  //TODO: 1111
  // обработка выбранного элемента модели из списка(которые надо передавать
  // в след. компонент для отрисовки данных
  public selectedItem = (): void => {};

  //TODO: 1111
  // обновления сиска по данным с апихи
  public listUpdate = (list: Printers[]):void => {
    this.setState(() => {
      this.state.list = list;
    });
  };

  render() {
    const { list } = this.state;
    return (
      <List classes={{ root: styles.root }}>
        {list.map(item => (
            <ListItem className={styles.item} button onClick={this.selectedItem}>
              <ListItemText primary={`Model: ${item.printer_model}`} />
              <ListItemText secondary={`S/N: ${item.printer_serial_number}`} />
              <ListItemText secondary={`Client: ${item.client}`} />
            </ListItem>
        ))}
      </List>
    );
  }
}

/*{list.map(item => (
          <ListItem button onClick={this.selectedItem}>
            <ListItemText primary={`Model: ${item.printer_model}`} />
            <ListItemText secondary={`S/N: ${item.printer_serial_number}`} />
            <ListItemText secondary={`Client: ${item.client}`} />
          </ListItem>
        ))}*/
