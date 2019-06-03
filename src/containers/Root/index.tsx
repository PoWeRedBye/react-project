import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from 'material';

import { RootRouter } from 'src/routes/root';
import { MaterialHeader } from 'src/components/material_mini_header';
import { MiniDrawer } from 'src/components/material_mini_drawer';
import { MaterialContent } from 'src/components/material-content';
import { State } from './types';
import './RootContainer.module.scss';

export class RootContainer extends React.Component<{}, State> {
  state: State = {
    sideBarIsOpen: false,
  };

  onSideBarStateToggle = () => {
    this.setState((prevState: State) => ({ sideBarIsOpen: !prevState.sideBarIsOpen }));
  };

  // RENDER

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <MaterialHeader handleDrawerToggle={this.onSideBarStateToggle} />
          <MiniDrawer isOpen={this.state.sideBarIsOpen} />
          <MaterialContent>
          <RootRouter />
          </MaterialContent>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
