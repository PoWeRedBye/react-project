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

import { Props, State } from './types';
import styles from './ListComponent.module.scss';



export class ListComponent extends React.Component<Props, State> {
  state: State = {
    list: hardcodedPrinters,
  };

  public selectedItem = ():void => {

  };

  //TODO: Хуйню написал 100% =)
  public listUpdate = () => {
    this.setState(() => {
      list: this.props.list
    });
  };


  render() {
    const { list } = this.state;
    return (
      <List classes={{root: styles.root}}>
        {list.map(item => (
          <ListItem button onClick={this.selectedItem}>
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
