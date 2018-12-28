import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const Grid = props => (
  <section>
    My documents
  </section>
);

Grid.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

Grid.defaultProps = {
  items: [],
  loading: false,
};

export default Loading(Grid);