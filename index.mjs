//import dependencies
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';

dotenv.config();

//import conn.mjs so that I connect to my db
import db from './db/conn.mjs';
//import cors so that I can make requests from my front end to my back end (back and front end can communicate  )
 import cors from 'cors';

import brainEntries from './routes/brain.mjs';
import calendarEntries from './routes/entry.mjs';
import todoEntries from './routes/todo.mjs';
import users from './routes/user.mjs';

// Set up the port
const PORT = process.env.PORT || 5052;

// Initialize the express app
const app = express();


//MIDDLEWARE
app.use(cors())
app.use(logger('dev'));
app.use(express.json());






// fill in my endpoints routes/    they will be in their own folder
app.use('/api/braindump', brainEntries);
app.use('/api/calendar', calendarEntries);
app.use('/api/todo', todoEntries);
app.use('/api/users', users);


app.get('/*', (req,res)=>{
    res.redirect('/');

})

// Global error handler after routes
app.use((err,_req,res,next)=>{
    res.status(500).send('there was an error on the server');
})


// Start the server
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);   
})