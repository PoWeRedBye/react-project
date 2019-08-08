import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from 'src/pages/public/Home';
import { UserSignIn } from 'src/pages/public/UserSignIn';
import { UserRegister } from "src/pages/UserRegistration";

import { Polygraphy } from "src/pages/public/polygraphy";

export class PublicRootRouter extends React.Component {
  // RENDER

  render() {
    return (
      <Switch>
        /* create a route to sign in form => start page!!! */
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={UserSignIn} />
        <Route exact path="/user-register" component={UserRegister} />
        <Route exact path="/polygraphy" component={Polygraphy} />
      </Switch>
    );
  }
}
