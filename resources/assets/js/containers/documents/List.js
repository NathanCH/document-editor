import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import withLoader from './withLoader';

import './List.scss';

const List = props => (
  <div className="list">
    {props.items.map(item => (
      <ListItem 
        item={item} 
        key={item.id} />
    ))}
  </div>
);

List.propTypes = {
  items: PropTypes.array,
  isFetching: PropTypes.bool,
};

List.defaultProps = {
  items: [],
  isFetching: false,
};

export default withLoader(List);