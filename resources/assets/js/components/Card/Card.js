import React from 'react';
import PropTypes from 'prop-types';

import { 
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

import './Card.scss';

const CardWrapper = props => (
  <Card className={props.className}>
    <CardBody>
      {props.customSection}
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
);

CardWrapper.propTypes = {
  className: PropTypes.string,
  customSection: PropTypes.element,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

CardWrapper.defaultProps = {
  className: '',
  customSection: null,
  title: '',
  text: '',
};

export default CardWrapper;