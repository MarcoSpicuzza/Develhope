import supertest from "supertest";
import app from "./app";

const request = supertest(app);

test("GET /username", async () => {
    const res = await request
        .get("/username")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(res.body).toEqual([{ nome: "Marco" }]);
});
