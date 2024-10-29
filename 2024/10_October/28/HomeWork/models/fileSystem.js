const fs = require("fs").promises; // Use fs.promises to support async/await//gpt
const path = require("path");

async function readProjects() {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "../models/projects.json"),
      "utf8"
    );
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading projects.json:", err);
    return [];
  }
}

async function overwriteProjects(newProjectsArray) {
  try {
    const jsonString = JSON.stringify(newProjectsArray, null, 2);
    await fs.writeFile(
      path.join(__dirname, "../models/projects.json"),
      jsonString,
      "utf8"
    );
    console.log("Successfully overwritten projects.json");
  } catch (err) {
    console.error("Error writing to projects.json:", err);
  }
}

const projectsFS = { readProjects, overwriteProjects };
module.exports = { projectsFS };
