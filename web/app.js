const express = require('express');
const app = express();
const AppError = require('./custom/appError');
const router = require('./routes/webRouter');
const { errorHandler } = require('./custom/middleWare');

// EJS is the view engine (.ejs files).
app.set('view engine', 'ejs');

// Provides access to static content, like css, images, and js within the public directory.
app.use(express.static(`public`));

// Shotcut to bootstrap distribution directory.
app.use(
  '/bootstrap',
  express.static(__dirname + '/node_modules/bootstrap/dist/')
);

// Shortcut to bootstrap icons directory.
app.use(
  '/bootstrap-icons',
  express.static(__dirname + '/node_modules/bootstrap-icons/icons/')
);

// Express router to handle all web related endpoints.
app.use(router);

// If no url is matched in the webRouter, 404 will be shown.
app.use((req, res, next) => {
  next(new AppError('Page not found!', 404));
});

// Global error handler
app.use(errorHandler);

module.exports = app;
