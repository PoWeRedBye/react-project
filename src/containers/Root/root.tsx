import React from 'react';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';

import { Navigation } from 'src/services';
import { store } from 'src/store';
import { PublicRootRouter } from 'src/routes/root/public';
import { BootstrapHeader } from 'src/components/bootstrap_header';
import styles from './RootContainer.module.scss';
import { PrivateRootRouter } from 'src/routes/root';
import {Toast} from "src/components/toast";

// Create a history of your choosing (we're using a browser history in this case)
const history: History = createBrowserHistory();
// Initialize navigation service
Navigation.init(history);

export class RootContainer extends React.Component {
  // componentDidMount() {
  //   store.dispatch(checkUserAuth());
  // }

  // RENDER

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <React.Fragment>
            <BootstrapHeader />
            <div className={styles.container}>
              <PublicRootRouter />
              <PrivateRootRouter />
            </div>
            <Toast />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
