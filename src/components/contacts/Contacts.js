import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Customer</span> List
              </h1>
              <Link to="/admin/customer/add" className="nav-link">
                Add Customer
              </Link>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
