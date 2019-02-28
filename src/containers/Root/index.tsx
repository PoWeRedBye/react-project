import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RootRouter } from '../../routes/root';
import { Header } from "../../components/header";
// Import global styles
import '../../styles/index.css';

export class RootContainer extends React.Component {
  // RENDER

  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <RootRouter />
        </>
      </BrowserRouter>
    );
  }
}
