import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';

const GridItem = props => {
  const GridItemHeader = () => (
    <div>
      <i className="fas fa-plus"></i>
      <i className="fas fa-file-alt"></i>
    </div>
  );

  return (
    <Card
      className="grid-item"
      customSection={<GridItemHeader />}
      title={props.item.title} 
      text={props.item.updated_at} />
  );
};

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GridItem