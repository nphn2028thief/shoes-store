import { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  public state: Readonly<IState> = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): IState {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return <div>Something...</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
