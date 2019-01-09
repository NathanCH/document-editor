import React from 'react';
import PropTypes from 'prop-types';

const Info = props => (
  <span>{props.count} results found.</span>
);

Info.propTypes = {
  count: PropTypes.number,
};

Info.defaultProps = {
  count: 0,
};

const Paginate = {
  Info: Info,
};

export default Paginate;