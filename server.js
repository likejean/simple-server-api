const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//importing routes
const taskRoutes = require('./api/routes/tasks');
const boardRoutes = require('./api/routes/boards');

//Connecting to MongoDB Atlas cluster
mongoose.connect(
    'mongodb+srv://likejean:' +
    process.env.MONGO_ATLAS_PASSWORD +
    '@rest-api-kanban-pygoz.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);


app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () => console.log('All is Ok!'));