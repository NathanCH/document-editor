import React from 'react';
import PropTypes from 'prop-types';
import { Col, Nav, Row } from 'reactstrap';
import Breadcrumb from 'components/Breadcrumb';

const Layout = props => (
  <section>
    <Row>
      <Col>
        <Breadcrumb current="Documents" />
      </Col>
    </Row>
    <Row className="align-items-end mt-4">
      <Col>
        <h2>Documents</h2>
        {props.children}
      </Col>
    </Row>
  </section>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
