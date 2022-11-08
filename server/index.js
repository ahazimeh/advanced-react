const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect('mongodb://127.0.0.1:27017/test?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0')

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port);