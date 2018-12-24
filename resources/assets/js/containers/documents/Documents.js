import React from 'react';
import PropTypes from 'prop-types';
import View from './View';

class Documents extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.request();
  }

  render() {
    return <View request={this.props.request} />;
  }
}

Documents.propTypes = {
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool,
  request: PropTypes.func.isRequired,
};

Documents.defaultProps = {
  isFetching: false,
  hasError: false,
};

export default Documents;