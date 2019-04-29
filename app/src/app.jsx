// Dependencies
import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader'

// Containers
import Home from './containers/Home';
import Root from './containers/Root';
import Registration from './containers/Registration';
import Admin from './containers/Admin';
import Login from './containers/Login';


// Stores
// import { authStore } from 'stores';

const history = createBrowserHistory();
//
// authStore.checkToken(routeToLogin);
// history.listen(location => {
//   authStore.checkToken(routeToLogin);
// });

const App = () => (
  <div className={'app'}>
    <Router history={history} >
      <Root history={history}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/register" component={Registration} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Root>
    </Router>
  </div>
);

export default hot(module)(App);
