import express from 'express';
import path from "path";

/* 1-ENTRANCE */
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join()));

/* 2-SESSIONS */

/* 3-VIEWS */

/* 4-ROUNTERS */


export default app;