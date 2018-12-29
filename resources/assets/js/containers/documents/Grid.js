import React from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import Loading from './Loading';

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
  loading: PropTypes.bool,
};

Grid.defaultProps = {
  items: [],
  loading: false,
};

export default Loading(Grid);