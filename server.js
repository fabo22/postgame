const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const port = process.env.PORT || 3001;

const postsRouter = require('./routes/api/posts');
const commentsRouter = require('./routes/api/comments');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));
app.use(require('./config/auth'));
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});