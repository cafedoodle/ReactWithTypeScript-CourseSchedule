// src/errorboundaries/ErrorBoundary.tsx
import React from "react";
import type { ErrorInfo } from "react"; // Type-only import for ErrorInfo

/**
 * Error boundary that catches JavaScript errors in its child component tree.
 */

// Define the state type
interface State {
  hasError: boolean;
}

// Define the props type
interface Props {
  children: React.ReactNode; // This allows any valid React node as children
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // Specify the type of the error parameter
  static getDerivedStateFromError(error: Error): State {
    console.error("Error caught in ErrorBoundary:", error);
    return { hasError: true };
  }

  // Specify types for the error and errorInfo parameters
  // Implement componentDidCatch to add some extra logic
  // for example, to log the error to an analytics service.
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. ErrorBoundary</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
