import React from 'react'
import Honeybadger from 'honeybadger-js'
import ErrorBoundary from '@honeybadger-io/react'


const withHoneyBadger = ComposedComponent => {
  return class HOC extends React.Component {
    componentDidMount() {
      if (typeof window !== 'undefined') {
        this.honeybadger = Honeybadger.configure(config);
      }
    }
    render() {
      return <ErrorBoundary honeybadger={this.honeybadger}><ComposedComponent {...this.props} /></ErrorBoundary>
    }
  };
};

export default withHoneyBadger;
