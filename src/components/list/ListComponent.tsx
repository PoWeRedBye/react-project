import React from 'react';
//Material
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Props } from './types';
import styles from './ListComponent.module.scss';

export class ListComponent extends React.Component<Props> {
  render() {
    const { items, onItemClick } = this.props;

    return (
      <List classes={{ root: styles.root }}>
        {items.map(item => (
          <ListItem key={item._id} className={styles.item} button onClick={() => onItemClick(item)}>
            <ListItemText primary={`Model: ${item.printer_model}`} />
            <ListItemText secondary={`S/N: ${item.printer_serial_number}`} />
            <ListItemText secondary={`Client: ${item.client}`} />
          </ListItem>
        ))}
      </List>
    );
  }
}
