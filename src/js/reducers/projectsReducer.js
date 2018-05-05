const initialState = {
  projects: []
};

const projectsReducer = (state = initialState, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "GET_PROJECTS_RESPONSE":
      var newProjects = [].concat(newState.projects);
      action.payload.data.map((project, index) => {
        const newProject = {
          title:project.title.rendered,
          description:project.acf.description,
          screenshot:project.acf.screenshot,
          website:project.acf.website
        };
        newProjects.push(newProject);
      });
      newState.projects = newProjects;
      break;
    case "GET_PROJECTS_ERROR":
      console.log("GET_PROJECTS_ERROR",action.payload);
      break;
  }
  return newState;
}

export default projectsReducer;
