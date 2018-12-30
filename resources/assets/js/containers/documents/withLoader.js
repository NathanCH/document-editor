import React from 'react';
import Loader from 'components/Loader';

const withLoader = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      if (this.props.isFetching) {
        return <Loader />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoader;
