//import express from 'express'; 
import express from 'express';
//import { PrismaClient } from './generated/prisma';
import { PrismaClient } from '@prisma/client';

// Initialize Express app and Prisma Client
const app = express();
const prisma = new PrismaClient();

//define a route handler for the users URL
app.get('/users', async(req, res) => {
  try{
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }
  catch(error){
    console.log(error);
    res.status(500).json({error: 'An error occurred while fetching users'});
  }
})

//define a route handler for creating a new user
app.post('/users', async(req, res) => {
  try{
    
    //extract user data from the request body
    const {firstName, lastName, emailAddress} = req.body;
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        emailAddress
      }
    });
    res.status(201).json(newUser);
  }
  catch(error){
    console.log(error);
    res.status(500).json({error: 'An error occurred while creating user'});
  }
});

//define a route handler for fetching a user by ID
app.get('/users/:id', async(req, res) => {
  const userId = req.params.id;
  try {

    //fetch user from the database using Prisma
    const user = await prisma.user.findUnique({

      //use AND to check if both conditions are met
      where: {id: parseInt(userId)}
    });
    if(user){
      res.status(200).json(user);
    } else {
      res.status(404).json({error: 'User not found'});
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'An error occurred while fetching user'});
    
  }
});

//define a route handler for deleting a user by ID
app.delete('/users/:id', async(req, res) => {
  const userId = req.params.id;
  try {

    //soft-delete user by setting isDeleted to true
    const deletedUser = await prisma.user.update({
      where: {id: parseInt(userId)},
      data: {
        isDeleted: true
      }
    });
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'An error occurred while deleting user'});
  }
});














//setup a basic route
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});