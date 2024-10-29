const { projectsFS } = require("../models/fileSystem.js");
//1.
async function getAllProjects() {
  try {
    const projects = await projectsFS.readProjects();

    return projects;
  } catch (err) {
    console.error("Failed to get projects:", err);
    return [];
  }
}
//2.
async function getProductByID(id) {
  const projectsArray = await getAllProjects();
  return projectsArray.filter((project) => project.id === id);
}
//3.
async function addProject(project) {
  const projectsArray = await getAllProjects();
  const highestId = projectsArray.reduce((maxId, project) => {
    return project.id > maxId ? project.id : maxId;
  }, 0);
  project.id = highestId + 1;
  projectsArray.push(project);
  await projectsFS.overwriteProjects(projectsArray);
  console.log("Projects.json has been successfully updated.");
}
//4.
async function updateProject(id, updatedFields) {
  const projectsArray = await projectsFS.readProjects();

  const projectIndex = projectsArray.findIndex((project) => project.id === id);
  if (projectIndex === -1) {
    console.error(`Project with ID ${id} not found.`);
    return;
  }
  projectsArray[projectIndex] = {
    ...projectsArray[projectIndex],
    ...updatedFields,
  };
  await projectsFS.overwriteProjects(projectsArray);
  console.log(`Project with ID ${id} has been updated successfully.`);
}
//5.
async function deleteProject(id) {
  const projectsArray = await getAllProjects();
  const checks = (element) => element.id === id;
  const index = projectsArray.findIndex(checks);
  projectsArray.splice(index, 1);

  await projectsFS.overwriteProjects(projectsArray);
  console.log(`Projects.json has removed ${id} successfully.`);
}
const projects = {
  getAllProjects,
  addProject,
  getProductByID,
  updateProject,
  deleteProject,
};
module.exports = { projects };
