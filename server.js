import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authcontriler from './routes/auth.js'
import cors from 'cors';
import categoryRoute from './routes/cateogryroute.js' 
import productRoute from './routes/productRoutes.js'

dotenv.config()
const app=express()
const  port=process.env.PORT || 8000
app.use(cors());
// database
connectDB()


// MIDDLEWERE
app.use(express.json());



// routes
app.use('/api/v1/auth', authcontriler )
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/product',productRoute)

const cors = require('cors');
app.use(cors({ origin: 'https://mern-ecommerce-2-uhaw.onrender.com/', credentials: true }));


app.listen(port,()=>{
    console.log(`It is workin on port no ${port}`)
})
