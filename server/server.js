import express from "express";
import websockets from "ws";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client")));

app.listen (port, () => {
    console.log(`http://localhost:${port}`);
})