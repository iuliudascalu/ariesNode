"use strict"

module.exports = {
  isAdmin
}

function isAdmin(req, res, next) {
  if(req.body.isAdmin) {
    return next();
  }

  return res.send("User is not auth");
}
