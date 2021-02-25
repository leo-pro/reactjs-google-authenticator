import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes = () =>(
  <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/" component={Dashboard}/>
  </Switch>
)

export default Routes;