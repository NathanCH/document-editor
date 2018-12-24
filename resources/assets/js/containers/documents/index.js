import React, { Fragment } from 'react';
import { Col, Nav, Row } from 'reactstrap';

import Breadcrumb from 'components/Breadcrumb';

const Documents = () => (
  <Fragment>
    <Row>
      <Col>
        <Breadcrumb />
      </Col>
    </Row>
    <Row className="align-items-end mt-4">
      <Col xs="12" sm="8">
        <h2>Browse</h2>
        <p>2 results found. Show <a href="#" className="text-underline">50</a> per page. </p>
      </Col>
    </Row>
  </Fragment>
);

export default Documents;