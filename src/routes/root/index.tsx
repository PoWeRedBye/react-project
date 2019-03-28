import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from 'src/pages/Home';
import { ProductRegistration } from 'src/pages/ProductRegistrationForm';
import { ComingForm } from 'src/pages/ComingForm';
import { CartridgeForm } from 'src/pages/CartridgeForm';
import { ConsumptionForm } from 'src/pages/ConpsumptionForm';
import { PrintersForm } from 'src/pages/PrintersForm';
import { UserSignIn } from 'src/pages/UserSignIn';
import { UserProfilePage } from 'src/pages/UserProfilePage';
import { ContractPrinter } from 'src/pages/ContractPrinter';

export class RootRouter extends React.Component {
  // RENDER

  render() {
    return (
      <Switch>
        /* create a route to sign in form => start page!!! */
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={UserSignIn} />
        <Route exact path="/register-product" component={ProductRegistration} />
        <Route exact path="/coming-form" component={ComingForm} />
        <Route exact path="/cartridge-form" component={CartridgeForm} />
        <Route exact path="/consumption-form" component={ConsumptionForm} />
        <Route exact path="/printer-form" component={PrintersForm} />
        <Route exact path="/user-profile" component={UserProfilePage} />
        <Route exact path="/contract-printers" component={ContractPrinter} />
      </Switch>
    );
  }
}
