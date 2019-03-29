import React from 'react';
//Material
import {List, ListItem} from 'src/proxy/material';

import { Switcher } from 'src/components/non_checked_switch';
import { Input } from 'src/components/read_only_text_field';

import { Props, State } from './types';
import styles from './CountersList.module.scss';

export class CountersList extends React.Component<Props, State> {
  //RENDER
  render() {
    const { items } = this.props;
    if (items) {
      return (
        <List classes={{ root: styles.root }}>
          {items.map(item => (
            <ListItem key={item._id} className={styles.item}>
              <div className={styles.flex_row}>
                <div className={styles.flex_column_1}>
                  <Input disabled value={item.counter} fieldName="Counter:" />
                </div>
                <div className={styles.flex_column_2}>
                  <Input disabled value={item.date} fieldName="Date:" />
                </div>
              </div>
              <div className={styles.flex_row_1}>
                <Switcher checked={item.new_cartridge} label="new cartridge" />
                <Switcher checked={item.new_fix_unit} label="new fix unit" />
                <Switcher checked={item.new_oscillatory_node} label="new oscillatory node" />
              </div>
              <div className={styles.flex_row_2}>
                <Switcher checked={item.new_rollers} label="new rollers" />
                <Switcher checked={item.new_maintenance} label="maintenance" />
                <Switcher checked={item.nothing} label="you know nothing John Snow" />
              </div>
            </ListItem>
          ))}
        </List>
      );
    } else {
      return <div>nothing uuuuuuuu....</div>;
    }
  }
}
