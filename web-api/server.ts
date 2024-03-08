import * as cors from 'cors';
import * as path from 'path';
import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import mongoose, { Schema, Document } from 'mongoose';
import * as dotenv from 'dotenv';
import * as userController from './Controllers/userController'; // Import the updateUser function


dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

let dbURI;
let port;
if (process.env.NODE_ENV ==='development'){
    dbURI = process.env.DATABASE_LOCAL_DB;
    port = process.env.PORT || 3000;
}
if (process.env.NODE_ENV ==='test'){
    dbURI = process.env.DATABASE_TEST_DB
    port = process.env.PORT || 3001;
}
if (process.env.NODE_ENV ==='production'){
    dbURI = process.env.DATABASE_PROD_DB
    port = process.env.PORT || 80;
} else {
    dbURI = process.env.DATABASE_LOCAL_DB;
    port = process.env.PORT || 3000;
}


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.DB_CONNECTION_STRING, {
}).then(() => {
    console.log('Connected to MongoDB using ' + process.env.DB_CONNECTION_STRING);
}).catch((error: Error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Route to update a user
app.put('/api/Users/:userId', userController.updateUser);
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});