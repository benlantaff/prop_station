exports.errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).render('error', {
    errorMessage: err.message,
    statusCode: err.statusCode,
  });
  next();
};
