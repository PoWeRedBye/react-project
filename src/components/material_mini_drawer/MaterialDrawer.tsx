import React from 'react';
import classNames from 'classnames';
// Material:
import { Drawer, InboxIcon, List, ListItem, ListItemIcon, ListItemText, MailIcon } from 'material';
import { withStyles } from '@material-ui/core/styles';

import { Props, State } from './types';
import { ROUTES } from 'src/containers/Root/constants';
import { Navigation } from 'src/services';

const drawerWidth = 240;

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: '57px !important',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  myToolbar: {
    padding: '0 6px',
  },
  headerTitle: {
    marginLeft: 40,
  },
  drawerFix: {
    overflowX: 'hidden',
    justifyContent: 'space-between',
    paddingTop: 64,
  },
});

export class MaterialDrawer extends React.Component<Props, State> {
  state: State = {
    open: false,
  };

  onAuthorizedChangeButtonClick = () => {
    if (this.props.isAuthorized) {
      this.props.userLogout();
    } else {
      Navigation.goTo(ROUTES.login);
    }
  };

  render() {
    const { classes, isAuthorized } = this.props;

    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: this.props.isOpen,
          [classes.drawerClose]: !this.props.isOpen,
        })}
        classes={{
          paper: classNames(classes.drawerFix, {
            [classes.drawerOpen]: this.props.isOpen,
            [classes.drawerClose]: !this.props.isOpen,
          }),
        }}
        open={this.props.isOpen}
      >
        {/* TODO {Maxim Ozarovskiy}: replace items list with actual redirect buttons */}
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        {/* TODO {Maxim Ozarovskiy}: add only one login/logout button at this list */}
        <List>
          {[isAuthorized ? 'Logout' : 'Login'].map((text, index) => (
            <ListItem button key={text} onClick={this.onAuthorizedChangeButtonClick}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

// TODO: fix 'styles as any'
const WithStyles = withStyles(styles as any, { withTheme: true })(MaterialDrawer);

export const MiniDrawer = WithStyles;
