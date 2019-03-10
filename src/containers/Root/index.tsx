import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../../styles/index.css';
import { RootRouter } from '../../routes/root';
import { MiniDrawer } from '../../components/material_mini_drawer';
import { Props, State } from './types';
import styles from './RootContainer.module.scss';
import { MaterialHeader } from '../../components/material_mini_header';

export class RootContainer extends React.Component<Props, State> {
  state: State = {
    sideBarIsOpen: false,
  };

  onSideBarStateToggle = () => {
    console.log(this.state.sideBarIsOpen);
    console.log('+_+_+_+_'.repeat(20));
    this.setState((prevState: State) => ({ sideBarIsOpen: !prevState.sideBarIsOpen }));
    console.log(this.state.sideBarIsOpen);
  };

  // RENDER

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MaterialHeader handleDrawerToggle={this.onSideBarStateToggle}/>
          <div className={styles.container}>
            <MiniDrawer isOpen={this.state.sideBarIsOpen} />
            <RootRouter />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
