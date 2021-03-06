import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Arduinos from "../components/Arduinos";
import { Skills } from "../components/Skills";
import { Events } from "../components/Events";

import { getProjectsAction } from "../actions/getProjectsAction";
import { getArduinosAction } from "../actions/getArduinosAction";

class App extends React.Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getArduinos();
  }
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Header />
          <Navigation />
          <Route
            exact
            path="/"
            render={props => (
              <Home projects={this.props.projects} color={this.props.color} />
            )}
          />
          <Route
            path="/projects"
            render={props => <Projects projects={this.props.projects} />}
          />
          <Route
            path="/arduino"
            render={props => (
              <Arduinos
                arduinos={this.props.arduinos}
                getData={this.props.getArduinos}
              />
            )}
          />
          <Route path="/skills" component={Skills} />
          <Route path="/events" component={Events} />

          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projectsReducer.projects,
    arduinos: state.arduinosReducer.arduinos,
    color: state.colorReducer.color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => {
      dispatch(getProjectsAction());
    },
    getArduinos: () => {
      dispatch(getArduinosAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
