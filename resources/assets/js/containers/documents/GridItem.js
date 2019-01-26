import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import GridItemDropdown from './GridItemDropdown';

import './GridItem.scss';

const GridItem = props => {
  const formattedDate = 
    moment(props.item.updated_at).format('MMM D, YY h:ma');

  const documentPath = '/document/' + props.item.id;

  const GridItemText = () => (
    <span>
      <i className="far fa-clock"></i> {formattedDate}
    </span>
  );

  const GridItemTitle = () => (
    <Link to={documentPath} className="grid-item-title">
      {props.item.title}
    </Link>
  );

  const CustomSection = () => (
    <div className="grid-item-custom-section">
      <div className="grid-item-thumb">
        <i className="fas fa-file-alt"></i>
      </div>
      <GridItemDropdown />
    </div>
  );

  return (
    <Card
      className="grid-item"
      title={<GridItemTitle />} 
      text={<GridItemText />}
      customSection={<CustomSection />} />
  );
};

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GridItem;