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
    {props.customSection}
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
);

CardWrapper.propTypes = {
  className: PropTypes.string,
  customSection: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string,
};

CardWrapper.defaultProps = {
  className: '',
  customSection: null,
  title: null,
  text: null,
};

export default CardWrapper;