
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// Containers
import { Companies, CompaniesForm, Categories } from './containers';

ReactDOM.render((
    <HashRouter>
      <Switch>
      <Route exact path="/companies" name="Companies Page" component={Companies}/>
      <Route exact path="/companies/new" name="Companies Page" component={CompaniesForm}/>
      <Route exact path="/categories" name="Categories Page" component={Categories}/>
      <Redirect from="/*" to="/companies" />
      </Switch>
    </HashRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
