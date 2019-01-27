import React from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import withLoader from './withLoader';

import './Grid.scss';

const Grid = props => (
  <div className="grid">
    {Object.keys(props.items).map(id => (
      <GridItem 
        item={props.items[id]} 
        key={props.items[id].id} />
    ))}
  </div>
);

Grid.propTypes = {
  items: PropTypes.object,
  isFetching: PropTypes.bool,
};

Grid.defaultProps = {
  items: {},
  isFetching: false,
};

export default withLoader(Grid);