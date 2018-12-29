import React from 'react';
import PropTypes from 'prop-types';
import { Col, Nav, Row } from 'reactstrap';
import Breadcrumb from 'components/Breadcrumb';

const Container = props => (
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

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

const Section = props => (
  <Row className="mb-5">
    <Col>{props.children}</Col>
  </Row>
);

Row.propTypes = {
  children: PropTypes.element.isRequired,
};

const Layout = {
  Container: Container,
  Section: Section,
}

export default Layout;
