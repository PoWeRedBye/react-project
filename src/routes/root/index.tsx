import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from 'src/pages/public/Home';
import { ProductRegistration } from 'src/pages/ProductRegistrationForm';
import { ComingForm } from 'src/pages/ComingForm';
import { CartridgeForm } from 'src/pages/CartridgeForm';
import { ConsumptionForm } from 'src/pages/ConpsumptionForm';
import { PrintersForm } from 'src/pages/PrintersForm';
import { UserSignIn } from 'src/pages/public/UserSignIn';
import { UserProfilePage } from 'src/pages/UserProfilePage';
import { ContractPrinter } from 'src/pages/ContractPrinter';
import { UserRegister } from "src/pages/UserRegistration";

import { PrivateRoute } from '../component';
import { Polygraphy } from "src/pages/public/polygraphy";

export class RootRouter extends React.Component {
  // RENDER

  render() {
    return (
      <Switch>
        /* create a route to sign in form => start page!!! */
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={UserSignIn} />
        <PrivateRoute exact path="/register-product" component={ProductRegistration} />
        <PrivateRoute exact path="/coming-form" component={ComingForm} />
        <PrivateRoute exact path="/cartridge-form" component={CartridgeForm} />
        <PrivateRoute exact path="/consumption-form" component={ConsumptionForm} />
        <PrivateRoute exact path="/printer-form" component={PrintersForm} />
        <PrivateRoute exact path="/user-profile" component={UserProfilePage} />
        <PrivateRoute exact path="/contract-printers" component={ContractPrinter} />
        <Route exact path="/user-register" component={UserRegister} />
        <Route exact path="/polygraphy" component={Polygraphy} />
      </Switch>
    );
  }
}
