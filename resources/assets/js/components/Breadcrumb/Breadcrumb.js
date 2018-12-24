import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Breadcrumb.scss';

const Breadcrumb = (prop) => (
  <ul className="breadcrumb">
    <li className="breadcrumb-item">
      <Link to="/" className="breadcrumb-link">
        <i className="fa fa-home"></i>
      </Link>
    </li>
    {prop.current &&
      <li className="breadcrumb-item active">
        {prop.current}
      </li>
    }
  </ul>
);

Breadcrumb.propTypes = {
  current: PropTypes.string,
};

Breadcrumb.defaultProps = {
  current: null,
};

export default Breadcrumb;
