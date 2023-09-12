import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
import dotenv from 'dotenv'
import { connectDb } from './helper/db.js';


//env config
dotenv.config();


//Import the routes folder
import userRoute from "./routes/userRoute.js";
import blogRoute from "./routes/blogRoute.js";


//Calling dbConnect here
connectDb();


const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/user' , userRoute);
app.use('/api/v1/blog' , blogRoute);


//listen
app.listen(8080 , ()=>{
    console.log("Server started on port 8080");
})
