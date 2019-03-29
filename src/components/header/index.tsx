import React from 'react';
//Material
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button, MoreVertIcon } from 'src/proxy/material';

import user_image from 'src/icons/user.svg';
import { Props } from './types';
import './styles.css';

export class Header extends React.Component<Props> {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={this.props.onBurgerClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            FEROTEKH
          </Typography>
          <h1 className="style"> </h1>
          <img className="image" src={user_image} />
          <IconButton aria-label="More" aria-owns={open ? 'long-menu' : undefined} aria-haspopup="true">
            <MoreVertIcon />
          </IconButton>
          <Button color="inherit">SOME</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
