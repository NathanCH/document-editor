import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Filter from './Filter';
import Grid from './Grid';
import Layout from './Layout';
import List from './List';
import Paginate from './Paginate';
import Sort from './Sort';

class Documents extends React.Component {
  componentWillMount() {
    this.props.request();
  }

  render() {
    return (
      <Layout.Container>
        <Layout.Section>
          <Paginate.Info count={this.props.count}/>
        </Layout.Section>
        <Layout.Section>
          <Row>
            <Col xs="6" lg="8">
              <Filter
                onFilter={this.props.filterView}
                isFetching={this.props.isFetching} />
            </Col>
            <Col xs="6" lg="4">
              <Sort
                current={this.props.sort}
                onSort={this.props.sortView} />
            </Col>
          </Row>
        </Layout.Section>
        <Layout.Section>
          { this.props.view === 'grid' ? (
            <Grid 
              items={this.props.documents} 
              isFetching={this.props.isFetching} />
          ) : (
            <List 
              items={this.props.documents}
              isFetching={this.props.isFetching} />
          )}
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
  sort: PropTypes.string,
  request: PropTypes.func.isRequired,
  filterView: PropTypes.func.isRequired,
  sortView: PropTypes.func.isRequired,
};

Documents.defaultProps = {
  documents: [],
  count: 0,
  isFetching: false,
  hasError: false,
  view: 'grid',
  sort: 'date_desc',
};

export default Documents;