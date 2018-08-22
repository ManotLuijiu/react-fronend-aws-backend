import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  return (
    <footer className="footer navbar-dark bg-custom py-0">
      <div className="container">
        <div>
          <ul>
            <li>
              <a>Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  branding: 'Footer'
};

Footer.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Footer;
