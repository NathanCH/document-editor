import React from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';
import Layout from './Layout';

class Documents extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.request();
  }

  render() {
    return (
      <Layout>
        <Grid 
          items={this.props.documents} 
          loading={this.props.isFetching} />
      </Layout>
    );
  }
}

Documents.propTypes = {
  documents: PropTypes.array,
  count: PropTypes.number,
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool,
  request: PropTypes.func.isRequired,
};

Documents.defaultProps = {
  documents: [],
  count: 0,
  isFetching: false,
  hasError: false,
};

export default Documents;