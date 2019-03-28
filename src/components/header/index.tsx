import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
