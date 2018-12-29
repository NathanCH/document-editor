import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const Info = props => (
  <span>{props.count} results found.</span>
);

Info.propTypes = {
  count: PropTypes.number,
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool,
};

Info.defaultProps = {
  count: 0,
  isFetching: false,
  hasError: false,
};

const Paginate = {
  Info: Loading(Info),
};

export default Paginate;