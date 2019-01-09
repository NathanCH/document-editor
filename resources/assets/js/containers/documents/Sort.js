import React from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Label, Input } from 'reactstrap';

class Sort extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onSort(e.target.value, this.props.current);
  }

  render() {
    return (
      <FormGroup row className="mb-0">
        <Label for="exampleEmail" sm={2} className="d-none d-sm-block">Sort</Label>
        <Col sm={10}>
          <Input
            type="select"
            name="sort-view"
            onChange={this.handleChange}
            defaultValue={this.props.current}>
            <option value="date_desc">Date - Newest First</option>
            <option value="date_asc">Date - Oldest First</option>
            <option value="date_update">Date - Last Updated</option>
            <option value="alpha_asc">Alphabetical - Asc</option>
            <option value="alpha_desc">Alphabetical - Desc</option>
          </Input>
        </Col>
      </FormGroup>
    );
  }
};

Sort.propTypes = {
  hasError: PropTypes.bool,
  current: PropTypes.string,
  onSort: PropTypes.func.isRequired,
};

Sort.defaultProps = {
  current: 'date_desc',
  hasError: false,
};

export default Sort;