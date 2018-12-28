import React from 'react';
import PropTypes from 'prop-types';
import { Col, Nav, Row } from 'reactstrap';
import Breadcrumb from 'components/Breadcrumb';

const Loading = props => (
  <div>Loading</div>
);

const View = props => (
  <Row>
    <Col>
      <p>{props.count} documents found. Showing <a href="#" className="text-underline">all</a> types.</p>
      <button onClick={props.request}>Fetch 'em</button>
    </Col>
  </Row>
);

View.propTypes = {
  count: PropTypes.number,
  request: PropTypes.func.isRequired,
};

View.defaultProps = {
  count: 0,
};

const Layout = props => {

  const { count, isFetching, request } = props;

  const Content = isFetching 
    ? <Loading />
    : <View count={count} request={request} />;

  return (
    <section>
      <Row>
        <Col>
          <Breadcrumb current="Documents" />
        </Col>
      </Row>
      <Row className="align-items-end mt-4">
        <Col>
          <h2>Documents</h2>
          {Content}
        </Col>
      </Row>
    </section>
  );
};

Layout.propTypes = {
  documents: PropTypes.array,
  count: PropTypes.number,
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool,
  request: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  documents: [],
  count: 0,
  isFetching: false,
  hasError: false,
};

export default Layout;
