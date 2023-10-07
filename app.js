const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  const today = new Date();
  const newDate = addDays(today, 100);
  response.send(
    `${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});
module.exports = app;
