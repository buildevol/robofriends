import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  // Similar to try catch block
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, an error is encountered</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
