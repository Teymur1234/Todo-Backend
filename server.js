import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import todoRoutes from './routes/todos.routes.js';
import authRoutes from './routes/auth.routes.js'

dotenv.config();

const app = express()

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL || 8000 

app.use(cookieParser())
app.use(express.json())
app.use("/api/todos",todoRoutes);
app.use("/api/auth",authRoutes)

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT:4000 and MongoDb is connected`);
        })
    })
    .catch((error) => {
        message: error.message
    })