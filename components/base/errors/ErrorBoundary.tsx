"use client";

import { ErrorBoundaryStateUI, ErrorBoundaryUI } from "./interface";
import { Component, ErrorInfo } from "react";

async function logError(error: Error, errorInfo: ErrorInfo) {
  console.error("Logging remotely:", error, errorInfo);
}

export class ErrorBoundary extends Component<ErrorBoundaryUI, ErrorBoundaryStateUI> {
  public state: ErrorBoundaryStateUI = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryStateUI {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logError(error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, errorMessage: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            className="flex min-h-400 flex-col items-center justify-center p-6 text-center"
            role="alert"
            aria-live="assertive"
          >
            <h2 className="text-2xl font-bold text-red-600">
              Something went wrong
            </h2>
            {this.state.errorMessage && (
              <p className="mt-2 text-gray-600">{this.state.errorMessage}</p>
            )}
            <p className="mt-2 text-gray-600">
              There was an error loading this section.
            </p>
            <button
              onClick={this.handleReset}
              className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              aria-label="Retry loading the section"
            >
              Try again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
