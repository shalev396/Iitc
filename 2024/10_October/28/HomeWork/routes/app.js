const express = require("express");
const { projects } = require("../controllers/projects.js");
const { tasks } = require("../controllers/tasks.js");
const { users } = require("../controllers/users.js");
const controllers = { projects: projects, tasks: tasks, users: users };
const app = express();
const port = 3200;

app.get("/", async (req, res) => {
  //projects
  //1
  console.log(await controllers.projects.getAllProjects());
  //2
  console.log(await controllers.projects.getProductByID(1));
  //3
  await controllers.projects.addProject({
    name: "Project Test",
    description: "TEST",
    Deadline: "2024-10-02",
  });
  console.log(await controllers.projects.getAllProjects());
  //4
  const updatedFields = {
    name: "Updated Project Name",
    description: "Updated Description",
  };
  await controllers.projects.updateProject(2, updatedFields);
  console.log(await controllers.projects.getProductByID(2));
  //5
  await controllers.projects.deleteProject(4);
  console.log(await controllers.projects.getAllProjects());
  //Tasks
  //1
  console.log(await controllers.tasks.getAllTasks());
  console.log(await controllers.users.getAllUsers());
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// 1. **CRUD Routes for Projects**:
//     - `GET /api/projects` – returns all projects.
//     - `GET /api/projects/:id` – returns a project by its ID.
//     - `POST /api/projects` – adds a new project.
//     - `PATCH /api/projects/:id` – partially updates an existing project.
//     - `DELETE /api/projects/:id` – deletes a project by its ID.
// 2. **CRUD Routes for Tasks**:
//     - `GET /api/tasks` – returns all tasks.
//     - `GET /api/tasks/:id` – returns a task by its ID.
//     - `POST /api/tasks` – adds a new task.
//     - `PATCH /api/tasks/:id` – partially updates an existing task.
//     - `DELETE /api/tasks/:id` – deletes a task by its ID.
// 3. **CRUD Routes for Users**:
//     - `GET /api/users` – returns all users.
//     - `GET /api/users/:id` – returns a user by their ID.
//     - `POST /api/users` – adds a new user.
//     - `PATCH /api/users/:id` – partially updates a user’s details.
//     - `DELETE /api/users/:id` – deletes a user by their ID.
