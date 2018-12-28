import React from 'react';

const Loading = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      if (this.props.isFetching) {
        return <span>Loading!</span>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default Loading;
