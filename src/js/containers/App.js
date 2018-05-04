import React from "react";
import {connect} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";
import { Home } from "../components/Home";
import Projects from "../components/Projects";
import { Arduino } from "../components/Arduino";
import { Skills } from "../components/Skills";

import { getProjectsAction } from "../actions/getProjectsAction";

class App extends React.Component {
  componentDidMount() {
    this.props.getProjects();
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
        <Route path='/arduino' component={Arduino}/>
        <Route path='/skills' component={Skills}/>
        <Footer/>
      </div>
    </Router>;
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectsReducer.projects
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => {
      dispatch(getProjectsAction())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
