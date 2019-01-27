import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import withLoader from './withLoader';

import './List.scss';

const List = props => (
  <div className="list">
    {Object.keys(props.items).map(id => (
      <ListItem 
        item={props.items[id]} 
        key={props.items[id].id} />
    ))}
  </div>
);

List.propTypes = {
  items: PropTypes.object,
  isFetching: PropTypes.bool,
};

List.defaultProps = {
  items: {},
  isFetching: false,
};

export default withLoader(List);