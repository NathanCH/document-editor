import React from 'react';
import PropTypes from 'prop-types';
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
  const GridItemThumb = () => (
    <div className="grid-item-thumb">
      <i className="fas fa-file-alt"></i>
      <div className="grid-item-dropdown">
        <UncontrolledButtonDropdown direction="down">
          <DropdownToggle color="white" className="grid-item-toggle">
            <i className="fas fa-ellipsis-v"></i>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <i className="fas fa-fw fa-share"></i> Share
            </DropdownItem>
            <DropdownItem>
              <i className="fas fa-fw fa-trash"></i> Remove
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
    </div>
  );

  const formattedDate = 
    moment(props.item.updated_at).format('MMM D, YYYY h:ma');

  const GridItemText = () => (
    <span>
      <i className="far fa-clock"></i> {formattedDate}
    </span>
  );

  return (
    <Card
      className="grid-item"
      customSection={<GridItemThumb />}
      title={props.item.title} 
      text={<GridItemText />} />
  );
};

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GridItem