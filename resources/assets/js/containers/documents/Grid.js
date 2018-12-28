import React from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import Loading from './Loading';

const Grid = props => (
  <div>
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