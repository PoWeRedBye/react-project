import React from 'react';
import classNames from 'classnames';
// Material imports:
import { AppBar, IconButton, MenuIcon, Toolbar, Typography } from 'material';

import { Props } from './types';
import myStyles from './MaterialHeader.module.scss';

export class MaterialHeader extends React.Component<Props> {
  //RENDER
  render() {
    //const { classes } = this.props;
    return (
      <AppBar
        position="fixed"
        className={classNames(
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
          className={classNames(
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
            className={classNames(
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
