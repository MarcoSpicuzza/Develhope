import express from "express";
import "express-async-errors";

const app = express();

//route
app.get("/username", (req, res) => {
    res.json([{ nome: "Marco" }]);
});

export default app;
