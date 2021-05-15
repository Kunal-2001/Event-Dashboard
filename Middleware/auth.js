var jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).json({ msg: "No token authorized" });
  }

  try {
    const decodeUser = jwt.verify(token, process.env.SECRET_JWT_TOKEN);
    req.user = decodeUser;
    next();
  } catch (error) {
    res.status(400).json({ msg: "not valid token" });
  }
}

module.exports = auth;
