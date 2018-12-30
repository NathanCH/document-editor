import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Grid from './Grid';
import Layout from './Layout';
import Paginate from './Paginate';

class Documents extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.request();
  }

  render() {
    return (
      <Layout.Container>
        <Layout.Section>
          <Paginate.Info
            count={this.props.count}
            isFetching={this.props.isFetching} />
        </Layout.Section>
        <Layout.Section>
          <Filter
            setView={this.props.setView}
            isFetching={this.props.isFetching} />
        </Layout.Section>
        <Layout.Section>
          <Grid 
            items={this.props.documents} 
            isFetching={this.props.isFetching} />
        </Layout.Section>
      </Layout.Container>
    );
  }
}

Documents.propTypes = {
  documents: PropTypes.array,
  count: PropTypes.number,
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool,
  view: PropTypes.string,
  request: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
};

Documents.defaultProps = {
  documents: [],
  count: 0,
  isFetching: false,
  hasError: false,
  view: 'grid',
};

export default Documents;