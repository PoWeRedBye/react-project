import * as React from 'react';

import { State, Props } from './types';
import './styles.css';

export class Burger extends React.Component<Props, State> {
  public state: State = {
    className: 'hamburger hamburger--arrowturn js-hamburger',
    isActive: false,
  };

  public burgerOnClick = (): void => {
    if (this.state.isActive) {
      this.setState((prevState: State) => ({
        className: 'hamburger hamburger--arrowturn js-hamburger is-active',
        isActive: false,
      }));
    } else {
      // TODO: write in this place other methods -> swipe or something else
      this.setState(() => ({ className: 'hamburger hamburger--arrowturn js-hamburger', isActive: true }));
    }
  };

  public render(): React.ReactNode {
    const { className } = this.state;
    if (!this.state.className) {
      return null;
    }
    return (
      <div className={className}>
        <div className="hamburger-box" onClick={this.burgerOnClick}>
          <div className="hamburger-inner" />
        </div>
      </div>
    );
  }
}

/*else {

       <div class="hamburger hamburger--arrowturn js-hamburger">
           <div class="hamburger-box">
             <div class="hamburger-inner"></div>
           </div>
         </div>

         <div className="hamburger hamburger--arrowturn js-hamburger is-active" onClick={this.burgerOnClick}>
           <div className="hamburger-box">
             <div className="hamburger-inner"/>
           </div>
         </div>

         const { open } = this.state;
       }*/
