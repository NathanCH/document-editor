import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card from 'components/Card';

import './GridItem.scss';

const GridItem = props => {
  const GridItemThumb = () => (
    <div className="grid-item-thumb">
      <i className="fas fa-file-alt"></i>
      <button className="grid-item-button">
        <i className="fas fa-ellipsis-v"></i>
      </button>
    </div>
  );

  const formattedDate = 
    moment(props.item.updated_at).format('MMM D, YYYY h:ma');

  const GridCardText = () => (
    <span>
      <i className="far fa-clock"></i> {formattedDate}
    </span>
  );

  return (
    <Card
      className="grid-item"
      customSection={<GridItemThumb />}
      title={props.item.title} 
      text={<GridCardText />} />
  );
};

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GridItem