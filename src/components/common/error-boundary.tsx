import { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppReducer } from '../../reducers/root';
import { toggleErrorToast } from '../../actions/system';

const mapStateToProps = (state: AppReducer) => ({});

const mapDispatchToProps = {
  toggleErrorToast
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type MyProps = PropsFromRedux & {
  children: JSX.Element
}

type MyState = {
  error: any;
};

class ErrorBoundary extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidMount() {
    window.addEventListener("unhandledrejection", this.onUnhandledRejection);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.onUnhandledRejection);
  }

  onUnhandledRejection = (event: PromiseRejectionEvent) => {
    event.promise.catch((error) => {
      this.componentDidCatch(error);
      this.setState(ErrorBoundary.getDerivedStateFromError(error));
    });
  };

  componentDidCatch(error: any) {
    this.props.toggleErrorToast({ show: true, message: error.message, title: error.title || "Something went wrong" });
  }

  render() {
    // Re-render the same component and prevent a white page
    return this.props.children;
  }
}

export default connector(ErrorBoundary)