import React, { Fragment } from 'react';
import { Col, Nav, Row } from 'reactstrap';

import Breadcrumb from 'components/Breadcrumb';

const Documents = () => (
  <Fragment>
    <Row>
      <Col>
        <Breadcrumb current="Documents" />
      </Col>
    </Row>
    <Row className="align-items-end mt-4">
      <Col>
        <h2>Documents</h2>
        <p>2 documents found. Showing <a href="#" className="text-underline">all</a> types.</p>
      </Col>
    </Row>
  </Fragment>
);

export default Documents;