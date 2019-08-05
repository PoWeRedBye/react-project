import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Media } from 'reactstrap';

import { State } from './types';
import './BootstrapHeader.module.scss';


export class BootstrapHeader extends React.Component<{}, State> {
  state: State = {
    isOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState((prevState: State) => ({ isOpen: !prevState.isOpen }));
  };

  //RENDER

  render() {
    return (
      <Navbar light fixed="top" expand="md">
        <NavbarBrand href="/" className="mr-auto">
          ФЕРОТЕХ
        </NavbarBrand>
        <NavbarToggler onClick={this.handleDrawerToggle} className="mr-2" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Сервисное обслуживание</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Продажа техники</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/polygraphy">Полиграфия</NavLink>
            </NavItem>
            <NavItem>
              <Media>
                <Media left href="#">
                  <Media object data-src="src/icons/login_image.png" alt="Generic placeholder image" />
                </Media>
              </Media>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
