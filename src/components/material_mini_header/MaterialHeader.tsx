import React from 'react';
// Material imports:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import classnames from 'classnames';
import { Props } from './types';
import { withStyles } from '@material-ui/core';
import myStyles from './MaterialHeader.module.scss'

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
        <AppBar
          position="fixed"
          className={classnames(
            'MuiPaper-root-15',
            'MuiPaper-elevation4-21',
            'MuiAppBar-root-6',
            'MuiAppBar-positionFixed-7',
            'MuiAppBar-colorPrimary-13',
            'mui-fixed',
            'MaterialHeader-appBar-2',
          )}
        >
          {/*className={classes.appBar}*/}
          {/*{myStyles.app_bar}*/}
          <Toolbar
            className={classnames(
              'MuiToolbar-root-42',
              'MuiToolbar-regular-44',
              'MuiToolbar-gutters-43',
              'MaterialHeader-myToolbar-4',
            )}
          >
            {/*{ gutters: classes.myToolbar }*/}
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.props.handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography
               variant="h6"
               color="inherit"
               noWrap
               classes={{root: myStyles["MaterialHeader-headerTitle-5"]}}
            >/*classnames(
                 'MuiTypography-root-64',
                 'MaterialHeader-headerTitle-5',
                 'MuiTypography-h6-81',
                 'MuiTypography-colorInherit-93',
                 'MuiTypography-noWrap-90',
               )*//*classes={{ root: classes.headerTitle }}*/
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
