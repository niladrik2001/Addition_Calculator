const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) =>
  response.sendFile(__dirname + "/index.html")
);
app.post("/", function (request, response) {
  var n1 = Number(request.body.n1);
  var n2 = Number(request.body.n2);
  var result = n1 + n2;
  response.send("The result of your calculations are: " + result);
});

app.listen(8000, () => console.log("Server is running  on port 8000."));
