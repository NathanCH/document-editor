import React from 'react';
import PropTypes from 'prop-types';

import './Loader.scss';

const Loader = props => (
  <div className="loader">
    <i className="fas fa-asterisk fa-spin"></i>
  </div>
);

Loader.propTypes = {};

Loader.defaultProps = {};

export default Loader;