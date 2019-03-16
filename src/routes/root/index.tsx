import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../../pages/Home';
import { ProductRegistration } from '../../pages/ProductRegistrationForm';
import { ComingForm } from '../../pages/ComingForm';
import { CartridgeForm } from '../../pages/CartridgeForm';
import { ConsumptionForm } from '../../pages/ConpsumptionForm';
import { PrintersForm } from '../../pages/PrintersForm';
import { UserSignIn } from '../../pages/UserSignIn';
import { UserProfilePage } from '../../pages/UserProfilePage';
import { ContractPrinter } from '../../pages/ContractPrinter';

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
