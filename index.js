import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
import utubeRouter from './routes/utube.routes.js'
import cors from "cors";
const app = express();
app.use(cors())
dotenv.config()
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const client=new MongoClient(MONGO_URL) 
console.log("Mongodb is connected");
 await client.connect();

app.get("/", function (request, response) {
  response.send("welcome to youtube clone backend");
});


app.use('/utube',utubeRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));



export {client};