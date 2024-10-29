// SilentErrorBoundary.js
import React from "react";
import { Navigate } from "react-router-dom";

class SilentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error silently
    console.error("Error logged silently:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Redirect to the About page on error
      return <Navigate to="/about" replace />;
    }
    return this.props.children;
  }
}

export default SilentErrorBoundary;
