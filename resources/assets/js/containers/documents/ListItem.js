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

import './ListItem.scss';

const ListItem = props => {
  const ListItemThumb = () => (
    <div className="list-item-thumb">
      <div className="list-item-dropdown">
        <UncontrolledButtonDropdown direction="down">
          <DropdownToggle color="white" className="list-item-toggle">
            <i className="fas fa-ellipsis-v"></i>
          </DropdownToggle>
          <DropdownMenu right>
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

  const ListItemText = () => (
    <span>
      <i className="far fa-clock"></i> {formattedDate}
    </span>
  );

  return (
    <Card
      className="list-item"
      customSection={<ListItemThumb />}
      title={props.item.title}
      text={<ListItemText />} />
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;