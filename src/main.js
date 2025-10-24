//import express from 'express'; 
import express from 'express';
//import { PrismaClient } from './generated/prisma';
import { PrismaClient } from '@prisma/client';

// Initialize Express app and Prisma Client
const app = express();
const prisma = new PrismaClient();
















//setup a basic route
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});