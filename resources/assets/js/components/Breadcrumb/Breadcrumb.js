import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Breadcrumb.scss';

const Breadcrumb = () => (
  <ul class="breadcrumb">
    <li class="breadcrumb-item">
      <Link to="/" className="breadcrumb-link">
        <i class="fa fa-home"></i>
      </Link>
    </li>
    <li class="breadcrumb-item active">
      Browse
    </li>
  </ul>
);

export default Breadcrumb;
