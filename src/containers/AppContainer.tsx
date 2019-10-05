import React from 'react';
// import ErrorBoundary from '../containers/ErrorBoundary';
import Router from '../components/Router';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <ErrorBoundary> */}
        <Router />
        {/* </ErrorBoundary> */}
      </>
    );
  }
}
export default App;
