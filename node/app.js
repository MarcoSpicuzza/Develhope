const adminRoute = require("./routes/admin");
const express = require('express');
const { response } = require("express");
const app = express()

app.use(adminRoute)

app.listen(3000);

app.get("username", (req, res) => {
    res.json([{ nome: 'Marco', cognome: 'Spicuzza'}])
})

export default app;
