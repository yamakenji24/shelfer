import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './stylesheets/index.css';
import Login from './components/logins';
import CreateUser from './components/logins/createUser';
import DashBoard from './components/dashboard';
import Auth from './containers/auth';
import configureStore, {history} from './store';

library.add(faSearch, faShoppingCart);
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/create" component={CreateUser} />
        <Auth path="/dashboard" component={DashBoard} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
