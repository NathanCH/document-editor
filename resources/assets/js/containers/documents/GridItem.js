import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Card from 'components/Card';

import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown,
} from 'reactstrap';

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

  const CustomSection = (props) => (
    <div className="grid-item-custom-section">
      <div className="grid-item-thumb">
        <i className="fas fa-file-alt"></i>
      </div>
      <div className="grid-item-dropdown">
        <UncontrolledButtonDropdown direction="down">
          <DropdownToggle color="white" className="grid-item-toggle">
            <i className="fas fa-ellipsis-v"></i>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag={Link} to={documentPath + '/delete'}>
              <i className="fas fa-fw fa-trash"></i> Remove
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
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