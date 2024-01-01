import express,{Request,Response} from "express";
import {router} from "./routes/route";
import 'dotenv/config';
import connectDB from "./config/db";



const app = express();
const PORT = 3000;
connectDB();
app.use(express.json());

app.use("/",router);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})