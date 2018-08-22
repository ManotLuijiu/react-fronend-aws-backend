import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Nav = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-custom py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            src={logo}
            className="App-logo d-inline-block align-center"
            alt="logo"
          />
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/join" className="nav-link">
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  branding: 'Accounting Services'
};

Nav.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Nav;
