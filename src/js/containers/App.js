import React from "react";
import {connect} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";
import { Home } from "../components/Home";
import Projects from "../components/Projects";
import Arduinos from "../components/Arduinos";
import { Skills } from "../components/Skills";

import { getProjectsAction } from "../actions/getProjectsAction";
import { getArduinosAction } from "../actions/getArduinosAction";

class App extends React.Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getArduinos();
  }
  render() {
    return <Router>
      <div className="App">
        <Header/>
        <Navigation/>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' render={(props) => (
          <Projects projects={this.props.projects}/>
        )}/>
        <Route path='/arduino' render={(props) => (
          <Arduinos arduinos={this.props.arduinos}/>
        )}/>
        <Route path='/skills' component={Skills}/>
        <Footer/>
      </div>
    </Router>;
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectsReducer.projects,
    arduinos: state.arduinosReducer.arduinos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => {
      dispatch(getProjectsAction());
    },
    getArduinos: () => {
      dispatch(getArduinosAction());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
