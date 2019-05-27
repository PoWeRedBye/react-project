import React from 'react';

import { format } from 'date-fns';
//Material
import { List, ListItem } from 'material';

import { DATE_FORMAT } from 'src/constants';
import UK from 'date-fns/locale/uk';
import parse from 'date-fns/parse'
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
          {items
            .map(item => (
              <ListItem key={item._id} className={styles.item}>
                <div className={styles.flex_row}>
                  <div className={styles.flex_column_1}>
                    <Input disabled value={item.counter} fieldName="Counter:" />
                  </div>
                  <div className={styles.flex_column_2}>
                    <Input disabled value={parse(item.date, DATE_FORMAT, new Date(), {locale: UK})} fieldName="Date:" />
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
            ))
            .reverse()}
        </List>
      );
    } else {
      return <div>nothing uuuuuuuu....</div>;
    }
  }
}
