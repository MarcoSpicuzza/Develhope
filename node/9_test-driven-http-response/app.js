const supertest = require("supertest");

const createApp = require("./test.js");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/html");

  expect(response.text).toEqual("<h1>Welcome to the World Wide Web!</h1>");
});
