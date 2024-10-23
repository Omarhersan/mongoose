import express from "express";
import {config} from "dotenv"
import { connect } from "mongoose";
config();

import routes from "./routes";
import { json } from "express";

const app = express();
app.use(json())

const port = process.env.PORT || 3000;
const dburl = process.env.DB_URL;
app.use(routes)


connect(dburl as string).then(res => {
    console.log("Connected to DB");
    
    app.listen(port, () => {
        console.log(`App running on port ${port}`);
    });
}).catch(err => {
    console.log("Error connecting to DB");
});    
