import React from 'react';
//TODO { ???? } : strange import need FIX!!!!
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MaterialContentComponent extends React.Component<{ classes: any }> {
  render() {
    const { classes, children } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    );
  }
}

export const MaterialContent = withStyles(styles as any, { withTheme: true })(MaterialContentComponent);
