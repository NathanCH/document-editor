import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import withLoader from './withLoader';

class Filter extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.setView(e.currentTarget.value);
  }

  render() {
    return (
      <ButtonGroup>
        <Button color="secondary" onClick={this.handleClick} value="grid">
          <i className="fas fa-fw fa-grip-horizontal"></i> Grid
        </Button>
        <Button color="secondary" onClick={this.handleClick} value="list">
          <i className="fas fa-fw fa-list"></i> List
        </Button>
      </ButtonGroup>
    );
  }
};

Filter.propTypes = {
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool,
  setView: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  isFetching: false,
  hasError: false,
};

export default withLoader(Filter);