import React from 'react';
import { Switch } from 'react-router-dom';

import { ProductRegistration } from 'src/pages/ProductRegistrationForm';
import { ComingForm } from 'src/pages/ComingForm';
import { CartridgeForm } from 'src/pages/CartridgeForm';
import { ConsumptionForm } from 'src/pages/ConpsumptionForm';
import { PrintersForm } from 'src/pages/PrintersForm';
import { UserProfilePage } from 'src/pages/UserProfilePage';
import { ContractPrinter } from 'src/pages/ContractPrinter';

import { PrivateRoute } from '../../component';
import { store } from "src/store";
import { checkUserAuth } from "src/store/reducers/user";

export class PrivateRootRouter extends React.Component {


  //TODO: {MAX}
  componentDidMount() {
    store.dispatch(checkUserAuth());
  }

  // RENDER

  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/register-product" component={ProductRegistration} />
        <PrivateRoute exact path="/coming-form" component={ComingForm} />
        <PrivateRoute exact path="/cartridge-form" component={CartridgeForm} />
        <PrivateRoute exact path="/consumption-form" component={ConsumptionForm} />
        <PrivateRoute exact path="/printer-form" component={PrintersForm} />
        <PrivateRoute exact path="/user-profile" component={UserProfilePage} />
        <PrivateRoute exact path="/contract-printers" component={ContractPrinter} />
      </Switch>
    );
  }
}
