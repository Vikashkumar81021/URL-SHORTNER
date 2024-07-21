import 'dotenv/config'; 
import express from 'express'
import connectDB from './db/db.js';
import urlRouter from './routes/url-routes.js';


const app= express();
const port=2000;
app.use(express.json());
app.use('/api/v1',urlRouter)

connectDB()
app.listen(port,()=>{
    console.log(`Server is listen ${port}`);
})

