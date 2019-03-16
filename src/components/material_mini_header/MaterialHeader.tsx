import React from 'react';
// Material imports:
import myStyles from './MaterialHeader.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import classnames from 'classnames';
import { Props } from './types';

/*const styles = (theme: any) => ({
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
});*/

export class MaterialHeader extends React.Component<Props> {
  //RENDER
  render() {
    //const { classes } = this.props;
    return (
      <AppBar
        position="fixed"
        className={classnames(
          myStyles['MaterialHeader-appBar'],
          myStyles['MuiPaper-root'],
          myStyles['MuiPaper-elevation4'],
          myStyles['MuiAppBar-root'],
          myStyles['MuiAppBar-positionFixed'],
          myStyles['MuiAppBar-colorPrimary'],
          myStyles['mui-fixed'],
        )}
      >
        <Toolbar
          className={classnames(
            myStyles['MuiToolbar-root'],
            myStyles['MuiToolbar-regular'],
            myStyles['MuiToolbar-gutters'],
            myStyles['MaterialHeader-myToolbar'],
          )}
        >
          <IconButton color="inherit" aria-label="Open drawer" onClick={this.props.handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classnames(
              myStyles['MuiTypography-root'],
              myStyles['MaterialHeader-headerTitle'],
              myStyles['MuiTypography-h6'],
              myStyles['MuiTypography-colorInherit'],
              myStyles['MuiTypography-noWrap'],
            )}
          >
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
