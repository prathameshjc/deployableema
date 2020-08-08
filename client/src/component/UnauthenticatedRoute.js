import {BrowserRouter as Router,Switch,  Route, Redirect} from 'react-router-dom'
import React from 'react'
export default ({ component: C, appProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      !appProps.isAuthenticated
        ? <C {...props} {...appProps} />
        : <Redirect to="/" />}
  />;