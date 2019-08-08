import React from 'react';
import { Props } from './types';
import { Route } from 'react-router-dom';
export class PrivateRoute extends React.Component<Props> {
  render() {
    const { isAuthorized, ...props } = this.props;
    if (isAuthorized) {
      return <Route {...props} />;
    } else {
      return null;
    }
  }
}
