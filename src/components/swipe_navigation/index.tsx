import * as React from 'react';
import './styles.css';

export class SwipeNavigation extends React.Component {
  public render(): React.ReactNode {
    return (
      <nav id="dr-menu" className="dr-menu">
        <div className="dr-trigger">
          <span className="dr-icon dr-icon-menu" />
          <a className="dr-label">Menu</a>
        </div>
        <ul>
          <li>
            <a className="dr-icon dr-icon-user" href="#">
              Xavier Densmore
            </a>
          </li>
          <li>
            <a className="dr-icon dr-icon-camera" href="#">
              Videos
            </a>
          </li>
          <li>
            <a className="dr-icon dr-icon-heart" href="#">
              Favorites
            </a>
          </li>
          <li>
            <a className="dr-icon dr-icon-bullhorn" href="#">
              Subscriptions
            </a>
          </li>
          <li>
            <a className="dr-icon dr-icon-download" href="#">
              Downloads
            </a>
          </li>
          <li>
            <a className="dr-icon dr-icon-settings" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dr-icon dr-icon-switch" href="#">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
