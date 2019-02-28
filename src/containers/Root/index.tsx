import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigation } from '../../components/navigation';
import { RootRouter } from '../../routes/root';
import '../../styles/index.css';
import './styles.css';

export class RootContainer extends React.Component {
  // RENDER

  render() {
    return (
      <BrowserRouter>
        <>
          <Navigation />
          <RootRouter />
        </>
      </BrowserRouter>
    );
  }
}
