import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import Loading from './Loading';

const Filter = props => (
  <ButtonGroup>
    <Button color="secondary">
      <i className="fas fa-fw fa-grip-horizontal"></i> Grid
    </Button>
    <Button color="secondary">
      <i className="fas fa-fw fa-list"></i> List
    </Button>
  </ButtonGroup>
);

Filter.propTypes = {
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool,
};

Filter.defaultProps = {
  isFetching: false,
  hasError: false,
};

export default Loading(Filter);