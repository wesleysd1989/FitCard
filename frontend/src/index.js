
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// Containers
import { Companies, CompaniesForm, Categories, CategoriesForm } from './components';

import reducers from './reducers/'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/companies" name="Companies Page" component={Companies} />
        <Route exact path="/companies/new" name="CompaniesForm Page" component={CompaniesForm} />
        <Route exact path="/companies/:id/edit" name="CompaniesForm Page" component={CompaniesForm} />
        <Route exact path="/categories" name="Categories Page" component={Categories} />
        <Route exact path="/categories/new" name="CategoriesForm Page" component={CategoriesForm} />
        <Route exact path="/categories/:id/edit" name="CategoriesForm Page" component={CategoriesForm} />
        <Redirect from="/*" to="/companies" />
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
