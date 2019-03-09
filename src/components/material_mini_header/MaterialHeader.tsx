import React from 'react';
// Material imports:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//
import { Props } from './types';
import { withStyles } from "@material-ui/core";

const styles = (theme: any) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  myToolbar: {
    padding: '0 6px',
  },
  headerTitle: {
    marginLeft: 40,
  },
});

class MaterialHeader extends React.Component<Props> {

  //RENDER
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar classes={{ gutters: classes.myToolbar }}>
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.props.handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap classes={{ root: classes.headerTitle }}>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const WithStyles = withStyles(styles as any, { withTheme: true })(MaterialHeader);

export const MiniHeader = WithStyles;
