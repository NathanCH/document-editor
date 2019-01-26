import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { request } from 'modules/documents/requestReducer';

import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap';

import './GridItemDropdown.scss';

const GridItemMenu = props => (
  <div className="grid-item-dropdown">
    <UncontrolledButtonDropdown direction="down">
      <DropdownToggle color="white" className="grid-item-toggle">
        <i className="fas fa-ellipsis-v"></i>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={props.request}>
          <i className="fas fa-fw fa-trash"></i> Remove
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  </div>
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    request,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(GridItemMenu);