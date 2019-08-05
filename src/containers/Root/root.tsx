import React from 'react';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';

import { Navigation } from 'src/services';
import { store } from 'src/store';
import { checkUserAuth } from 'src/store/reducers/user';
import { RootRouter } from 'src/routes/root';
import { BootstrapHeader } from 'src/components/bootstrap_header';
import styles from './RootContainer.module.scss';

// Create a history of your choosing (we're using a browser history in this case)
const history: History = createBrowserHistory();
// Initialize navigation service
Navigation.init(history);

export class RootContainer extends React.Component {
  componentDidMount() {
    store.dispatch(checkUserAuth());
  }

  // RENDER

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <React.Fragment>
            <BootstrapHeader />
            <div className={styles.container}>
              <RootRouter />
            </div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
