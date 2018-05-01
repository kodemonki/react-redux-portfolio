import React from "react";
import {connect} from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Dumb } from "../components/Dumb";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Arduino } from "../components/Arduino";
import { Skills } from "../components/Skills";

import { dumbAction } from "../actions/dumbAction";

class App extends React.Component {
  render() {
    this.props.consoleLog('React dispatch');

    return <Router>
      <div className="App">
        <Header/>
        <Navigation/>
        {/*<Dumb initialised={this.props.initialised}/>*/}
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/arduino' component={Arduino}/>
        <Route path='/skills' component={Skills}/>
        <Footer/>
      </div>
    </Router>;
  }
}

const mapStateToProps = (state) => {
  return {
    initialised: state.dumbReducer.initialised
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    consoleLog: (message) => {
      dispatch(dumbAction(message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);