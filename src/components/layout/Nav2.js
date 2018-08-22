import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav2 = props => {
  const { lang } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-custom mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {lang}
        </Link>
        <h6>New</h6>
        <h6>24x7 Support via email, chat or phone </h6>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/admin/customer" className="nav-link">
                Admin Portal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Web Developers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Nav2.defaultProps = {
  lang: 'Eng'
};

Nav2.propTypes = {
  lang: PropTypes.string.isRequired
};

export default Nav2;
