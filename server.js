const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () => console.log('All is Ok!'));