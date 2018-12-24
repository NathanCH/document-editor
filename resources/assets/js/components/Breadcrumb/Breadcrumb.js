import React from 'react';
import PropTypes from 'prop-types';

import './Breadcrumb.scss';

const Breadcrumb = (prop) => (
  <ul className="breadcrumb">
    <li className="breadcrumb-item">
      <a href="/" className="breadcrumb-link">
        <i className="fa fa-home"></i>
      </a>
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
