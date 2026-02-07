module.exports.paginateUser = (req, res, next) => {
  // page, result => limit,offset
  const { page = 1, results = 15 } = req.query;
  const pagination = {
    limit: Number(results),
    offset: (page - 1) * results,
  };

  req.pagination = pagination;
  next();
};

module.exports.paginatePhones = (req, res, next) => {
  const { page = 1, results = 5 } = req.query;
  const pagination = {
    limit: Number(results),
    offset: (page - 1) * results,
  };

  req.pagination = pagination;
  next();
};