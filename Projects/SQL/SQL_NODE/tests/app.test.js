const request = require("supertest");
//const express = require('express');//not in use
const app = require("../server.js"); // Adjust this path to point to your Express app
//integration test
describe("GET /data/auth", () => {
  it("should respond with status code 200", async () => {
    const response = await request(app).get("/data/auth");
    expect(response.statusCode).toBe(200);
  });
  it("should respond with JSON data", async () => {
    const response = await request(app).get("/data/auth");
    expect(response.body).toBeDefined();
  });

  it("should respond with message", async () => {
    const response = await request(app).get("/data/auth");
    expect(response.body.message).toBe("Data successfully sent via Axios");
  });
  it("should respond with token", async () => {
    const response = await request(app).get("/data/auth");
    expect(response.body.data.token).not.toBeNull();
  });
  it("should respond with token", async () => {
    const response = await request(app).get("/data/auth");
    console.log(response.body.data.token);
    expect(response.body.data.token).not.toBe("ABC");
  });
});

//unit test
describe("unitTest", () => {
  test("checks if 1 + 2 is equal to 3", () => {
    expect(1 + 2).toBe(3);
  });

  test("check length of a string", () => {
    expect("string".length).toBe(6);
  });

  test("checks if true is true", () => {
    const bool = true;
    expect(bool).toBe(true);
  });

  test("checks if array index 4 =5", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(arr[4]).toBe(5);
  });

  test(`checks if person name is "shalev"`, () => {
    const person = {
      firstName: "shalev",
      LastName: "Ben Moshe",
    };
    expect(person.firstName).toBe("shalev");
  });
});
