import "dotenv/config";
import app from "./app";
const port = process.env.PORT;
const name = "Marco";

console.log(`Hello ${name}!`);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
