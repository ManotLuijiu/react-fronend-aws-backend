import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { Analytics } from 'aws-amplify';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/layout/Nav';
import Nav2 from './components/layout/Nav2';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Developer from './components/pages/Developer';
// import Footer from './components/pages/Footer';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Contacts from './components/contacts/Contacts';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    Analytics.record('appRender');
    return (
      <Provider>
        <Router>
          <div className="App">
            <Nav />
            <Nav2 />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Developer} />
                <Route exact path="/admin/customer" component={Contacts} />
                <Route
                  exact
                  path="/admin/customer/add"
                  component={AddContact}
                />
                <Route
                  exact
                  path="/admin/customer/edit/:id"
                  component={EditContact}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
