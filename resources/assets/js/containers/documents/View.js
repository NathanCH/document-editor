import React from 'react';
import PropTypes from 'prop-types';
import { Col, Nav, Row } from 'reactstrap';
import Breadcrumb from 'components/Breadcrumb';

const View = props => (
  <section>
    <Row>
      <Col>
        <Breadcrumb current="Documents" />
      </Col>
    </Row>
    <Row className="align-items-end mt-4">
      <Col>
        <h2>Documents</h2>
        <p>2 documents found. Showing <a href="#" className="text-underline">all</a> types.</p>
        <button onClick={props.request}>Fetch 'em</button>
      </Col>
    </Row>
  </section>
);

View.propTypes = {
  request: PropTypes.func.isRequired,
};

export default View;
