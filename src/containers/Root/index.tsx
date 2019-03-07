import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// Import global styles

import '../../styles/index.css';
import { RootRouter } from '../../routes/root';
import { Header } from '../../components/header';
import { MiniDrawer } from '../../components/material_mini_drawer';
import { SideBarNavigation } from '../../components/SideBar';
import { Props, State } from './types';
import styles from './RootContainer.module.scss';

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
    return <MiniDrawer />;

    // return (
    //   <BrowserRouter>
    //     <React.Fragment>
    //       <Header onBurgerClick={this.onSideBarStateToggle} />
    //       <div className={styles.container}>
    //         <SideBarNavigation isOpen={this.state.sideBarIsOpen} />
    //         <RootRouter />
    //       </div>
    //     </React.Fragment>
    //   </BrowserRouter>
    // );
  }
}
