import React from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import withLoader from './withLoader';

import './Grid.scss';

const Grid = props => (
  <div className="grid">
    {props.items.map(item => (
      <GridItem 
        item={item} 
        key={item.id} />
    ))}
  </div>
);

Grid.propTypes = {
  items: PropTypes.array,
  isFetching: PropTypes.bool,
};

Grid.defaultProps = {
  items: [],
  isFetching: false,
};

export default withLoader(Grid);