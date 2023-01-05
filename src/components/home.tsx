import { connect, ConnectedProps } from 'react-redux';
import { setActiveApp } from '../actions/system';
import React from 'react';
import { ReactComponent as LasoLogo } from '../assets/images/icons/med.svg';

import '../assets/stylesheets/home.scss';


const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
    setActiveApp
};

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type MyProps = PropsFromRedux;
type MyState = {

};
class Home extends React.Component<MyProps, MyState> {
    componentDidMount() {
        this.props.setActiveApp(null);
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-title-container">
                    <div className="home-title-side-midline"><div></div></div>
                    <div className="home-title text-schist" title="CA Approves!">CA Approves</div>
                    <div className="home-logo-bg-container"><LasoLogo/></div>
                </div>
                <div className="home-app-columns">
  
                </div>
            </div>
        );
    }
}

export default connector(Home);
