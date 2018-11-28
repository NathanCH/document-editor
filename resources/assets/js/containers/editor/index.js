import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  togglePrintLayout,
} from 'modules/editor.js';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Input,
} from 'reactstrap';

import Page from 'components/Page';

import './index.scss';

const Editor = props => (
  <div>
    <Row>
      <Col>
        <Card>
          <CardHeader>
            Editor Prototype
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <ButtonGroup>
                  <Button color="secondary">Editor</Button>
                  <Button outline color="secondary">Preview</Button>
                </ButtonGroup>
              </Col>
              <Col className="text-right">
                <Button
                  color="link" 
                  className="text-muted" 
                  onClick={props.togglePrintLayout}
                >
                  <Input type="checkbox" checked={props.is_print_layout} />
                  Print Layout
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="Editor__pages">
          <Page name="Page 1"  />
          <Page />
        </div>
      </Col>
    </Row>
  </div>
);

const mapStateToProps = ({ editor }) => ({
  mode: editor.mode,
  is_print_layout: editor.is_print_layout,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    togglePrintLayout,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
