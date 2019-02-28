import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export class Navigation extends React.Component {
  // RENDER

  public render(): React.ReactNode {
    return (
      <nav className="nav-container">
        <NavLink className="component-btn" to="/">
          All items
        </NavLink>
        <NavLink className="component-btn" to="/register-product">
          Register new position
        </NavLink>
        <NavLink className="component-btn" to="/coming-form">
          Coming Form
        </NavLink>
        <NavLink className="component-btn" to="/coming-table">
          Coming Table
        </NavLink>
        <NavLink className="component-btn" to="/consumption-form">
          Consumption Form
        </NavLink>
        <NavLink className="component-btn" to="/consumption-table">
          Consumption Table
        </NavLink>
        <NavLink className="component-btn" to="/cartridge-form">
          Cartridge Form
        </NavLink>
        <NavLink className="component-btn" to="/cartridge-table">
          Cartridge Table
        </NavLink>
        <NavLink className="component-btn" to="/printer-form">
          Printer Form
        </NavLink>
        <NavLink className="component-btn" to="/printer-table">
          Printer Table
        </NavLink>
      </nav>
    );
  }
}
