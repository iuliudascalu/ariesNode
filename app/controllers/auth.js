"use strict"

module.exports = {
  isAdmin
}

function isAdmin(req, res, next) {
  if(req.query.isAdmin) {
    return next();
  }

  return res.send("User is not auth");
}
