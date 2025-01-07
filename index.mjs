//import dependencies
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';

dotenv.config();

//import conn.mjs so that I connect to my db
import db from './db/conn.mjs';

import brainEntries from './routes/brain.mjs';
import calendarEntries from './routes/entry.mjs';
import todoEntries from './routes/todo.mjs';



// Set up the port
const PORT = process.env.PORT || 5052;

// Initialize the express app
const app = express();


//MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());





//ROUTES
app.get('/', (req,res)=>{
    res.send(
        '<h1>Calendar API</h1><ol>endpoints: <li>brain dump -/api/braindump</li> <li>calendar -/api/calendar</li><li>todos -/api/todo</li></ol>'
    )
})

// fill in my endpoints routes/    they will be in their own folder
app.use('/api/braindump', brainEntries);
app.use('/api/calendar', calendarEntries);
app.use('/api/todo', todoEntries);


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