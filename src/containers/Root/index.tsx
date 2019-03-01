import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// Import global styles
import '../../styles/index.css';

import { RootRouter } from '../../routes/root';
import { Header } from "../../components/header";
import {/* SideBarContainer,*/ SideBarNavigation } from "../../components/SideBar";
import { Props, State } from './types'
import styles from './RootContainer.module.scss';

export class RootContainer extends React.Component<Props, State> {
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
          <Header onBurgerClick={this.onSideBarStateToggle}/>
          <div className={styles.container}>
            {/*<SideBarContainer isOpen={this.state.sideBarIsOpen}>*/}
              <SideBarNavigation isOpen={this.state.sideBarIsOpen} />
            {/*</SideBarContainer>*/}
            <RootRouter />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
