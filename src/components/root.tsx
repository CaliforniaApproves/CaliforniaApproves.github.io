import { connect, ConnectedProps } from 'react-redux';
import React from 'react';
import ErrorToast from './common/error-toast';
import { PropsWithChildren } from 'react'

/* ****** Assets ****** */
import { AppReducer } from '../reducers/root';


//store the authed operator info so we check against it for auth events braodcast from other tabs

const mapStateToProps = (state: AppReducer) => {
    return {
        app: state.system.activeApp
        , errors: state.errors
    }
};

const mapDispatchToProps = {
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type MyProps = PropsFromRedux;

class Root extends React.Component<PropsWithChildren<MyProps>> {
    constructor(props: MyProps) {
        super(props);
    }

    render() {
        return (
            <div id="root-component" className="ca-approves-root">
                <div className="error-log">
                    {this.props.errors.map((error: any, index: number) => <ErrorToast key={index} error={error} index={index} />)}
                </div>
                {this.props.children}
            </div>
        );
    }
}
export default connector(Root);
