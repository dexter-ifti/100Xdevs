const express = require("express");

const app = express();

app.use(express.json());

// write a function that checks that the age of person is greater 14 or not and returns boolean

// Naive Approach
function isOldEnough(age) {
  if (age > 14) return true;
  else return false;
}

// using Naive approach we have to write code from 16 to 26 lines
app.get("/ride1", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "U have successfully riden the ride1",
    });
  } else {
    res.status(411).json({
      msg: "Sorry u are not of age yet",
    });
  }
});

// using Naive approach we have to write code from 29 to 39 lines
app.get("/ride2", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "U have successfully riden the ride2",
    });
  } else {
    res.status(411).json({
      msg: "Sorry u are not of age yet",
    });
  }
});

// Middleware - approach
function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
  if (age > 14) next();
  else res.status(411).json({ msg: "Sorry u are not of age yet" });
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", (req, res) => {
  res.json({
    msg: "U have successfully riden the ride1",
  });
});
app.get("/ride2", (req, res) => {
  res.json({
    msg: "U have successfully riden the ride2",
  });
});

app.listen(3000);
