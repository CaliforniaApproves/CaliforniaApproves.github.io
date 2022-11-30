import { connect, ConnectedProps } from 'react-redux';
import { setActiveApp } from '../actions/system';
import React from 'react';
import { ReactComponent as LasoLogo } from '../assets/images/icons/laso-med.svg';

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
            <div className="laso-home-container">
                <div className="laso-home-title-container">
                    <div className="laso-home-title-side-midline"><div></div></div>
                    <div className="laso-home-title text-schist" title="LASO is LAboratory SOftware!">Maestro</div>
                    <div className="laso-home-laso-logo-bg-container"><LasoLogo/></div>
                </div>
                <div className="laso-home-app-columns">
  
                </div>
            </div>
        );
    }
}

export default connector(Home);
