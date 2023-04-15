import React from "react";
import ErrorPage from "../components/ErrorPage";


interface Props {
  children?:React.ReactNode
}

interface State {
  hasError: boolean
}


export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props:{ children?:React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("error: " + error);
    console.log("errorInfo: " + JSON.stringify(errorInfo));
    console.log("componentStack: " + errorInfo.componentStack)
  }
  
  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorPage message={"an error happened"} />
      );
    }
    return this.props.children;
  }
}