const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

//app.use('/api',require('./routes/api'))
app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "my json api created" }), authData;
    }
  });
});
app.post("/api/login", (req, res) => {
  const user = {
    id: 1,
    name: "nijji",
    email: "nijji@gmail.com",
  };
  jwt.sign({ user }, "secret key", (err, token) => {
    res.json({ token });
  });
});

//verifyToken
function verifyToken(req, res, next) {
  //auth header value
  const bearerHeader = req.headers["authorization"];
  //if undefined
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    //forbidden
    res.sendStatus(403, (err) =>
    {
      err.msg
    });
  }
}

app.listen(5000);
