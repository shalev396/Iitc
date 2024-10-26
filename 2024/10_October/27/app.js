const fs = require("fs").promises; // Use fs.promises for async/await support

(async function main() {
  try {
    await read();
    await write();
    await add();
  } catch (error) {
    console.error(error);
  }
})();

async function read() {
  try {
    const data = await fs.readFile("hello.txt", "utf8");
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
}

async function write() {
  try {
    await fs.writeFile("hello.txt", "hello");
    console.log("override");
  } catch (err) {
    console.log(err);
  }
}

async function add() {
  try {
    await fs.appendFile("hello.txt", " world");
    console.log("updated");
  } catch (err) {
    console.log(err);
  }
}
