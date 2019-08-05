import React from 'react';
import { Button } from 'reactstrap';
import {Props} from './types';
import styles from './BootstrapButton.module.scss'

export class BootstrapButton extends React.Component<Props>{

  render(){
    const {color, text, /*styles*/} = this.props;
    //TODO: {FIX} - need set button-styles from props
    return (
      <Button className={styles.button} outline color={color}>{text}</Button>
    );
  }

}

