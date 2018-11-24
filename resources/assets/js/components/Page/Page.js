import React from 'react';
import PropTypes from 'prop-types';

import './Page.scss';

const Page = (props) => {
  return (
    <div className="Page Page--editor Page--print-layout">
      <div className="Page__Name text-muted">
        {props.name} <i className="Page__NameIcon fas fa-marker"></i>
      </div>
      <div className="Page__Paper">
        Content
      </div>
    </div>
  );
}

Page.propTypes = {
  name: PropTypes.string,
};

Page.defaultProps = {
  name: 'Untitled Page',
};

export default Page;
