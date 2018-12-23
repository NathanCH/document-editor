import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Col, Nav, NavItem, NavLink, Row } from 'reactstrap';

import Editor from '../editor';
import Home from '../home';
import About from '../about';

const App = () => (
  <Container>
    <Row className="justify-content-center">
      <Col>
        <Nav className="mb-3">
          <NavItem>
            <NavLink tag={Link} to="/">Editor</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about-us">About</NavLink>
          </NavItem>
        </Nav>
        <main>
          <Route exact path="/" component={Editor} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </Col>
    </Row>
  </Container>
);

export default App;
