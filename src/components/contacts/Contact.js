import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import Amplify from 'aws-amplify';
import aws_exports from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      });
    } catch (e) {
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      });
    }
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    // if (company !== undefined) {
    //   const compName = company.name;
    // }

    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i onClick={this.onShowClick} className="fas fa-sort-down" />
                <i
                  className="fas fa-times"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/admin/customer/edit/${id}`}>
                  <i className="fas fa-pencil-alt" />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default withAuthenticator(Contact);
