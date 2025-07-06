import express from "express";
const app = express();
import cors from "cors";

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true , limit:"20kb"}));
app.use(express.static("public"));

export {app}
