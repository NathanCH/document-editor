import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

class Filter extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onFilter(e.currentTarget.value);
  }

  render() {
    return (
      <ButtonGroup className="text-nowrap">
        <Button
          color="secondary"
          onClick={this.handleClick}
          value="grid"
          disabled={this.props.isFetching}>
          <i className="fas fa-fw fa-grip-horizontal"></i> Grid
        </Button>
        <Button
          color="secondary"
          onClick={this.handleClick}
          value="list"
          disabled={this.props.isFetching}>
          <i className="fas fa-fw fa-list"></i> List
        </Button>
      </ButtonGroup>
    );
  }
};

Filter.propTypes = {
  isFetching: PropTypes.bool,
  onFilter: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  isFetching: false,
};

export default Filter;