import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Props } from './types';

export class Header extends React.Component<Props> {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={this.props.onBurgerClick}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
