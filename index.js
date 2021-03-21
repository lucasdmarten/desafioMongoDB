const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser  = require('cookie-parser');
// import Routes
const authRoute = require('./routers/auth');
const naversRoute = require('./routers/navers');
const projectsRoute = require('./routers/projects');
// const testeRoute = require('./routers/teste');

const dotenv = require('dotenv');
dotenv.config();


// connect to the db
mongoose.connect( 
    process.env.DB_CONNECT,
    {useNewUrlParser:true},
    () => console.log("mongoose connected!")
);




// middlewares
app.use(express.json())
app.use(cookieParser());

// Route Middlewares
// app.use('/teste', testeRoute);


app.use('/api/user', authRoute);
app.use('/api/navers', naversRoute);
app.use('/api/projects', projectsRoute);


app.listen(3000, () => console.log('running on 3000'));