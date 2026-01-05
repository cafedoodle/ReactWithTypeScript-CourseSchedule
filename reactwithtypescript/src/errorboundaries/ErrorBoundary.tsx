// src/errorboundaries/ErrorBoundary.tsx
import React from "react";
import type { ErrorInfo } from "react"; // Type-only import for ErrorInfo

/**
 * Error boundary that catches JavaScript errors in its child component tree.
 */

// Step 1: Define the state type
interface State {
  hasError: boolean;
}

// Step 2: Define the props type
interface Props {
  children: React.ReactNode; // This allows any valid React node as children
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // Step 3: Specify the type of the error parameter
  static getDerivedStateFromError(error: Error): State {
    console.error(`Error: inside ErrorBoundary - ${error}.`);
    return { hasError: true };
  }

  // Step 4: Specify types for the error and errorInfo parameters
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
