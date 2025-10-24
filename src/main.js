//import express from 'express'; 
import express from 'express';
//import { PrismaClient } from './generated/prisma';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();