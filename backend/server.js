require("dotenv").config();
const express = require("express");
const router = require("./routes");
const app = express();
const PORT = process.env.PORT || 5500;
const Dbconnect = require("./database")
const cors = require('cors');

Dbconnect();
app.use(express.json())
const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};

app.use(cors(corsOption))
app.use(router);
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})