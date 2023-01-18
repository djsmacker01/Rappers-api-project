const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());

const rappers = {

  "rick ross": {
    "age": 46,
    "birthName": "William Leonard Roberts II",
    "birthLocation": "Clarksdale, Mississippi, U.S.",
  },

  "Chance the Rapper": {
    "age": 29,
    "birthName": " Johnathan Bennett ",
    "birthLocation": "Chicago,Illinois",
  },

  "eminem": {
    "age": 40,
    "birthName": " Johnathan Bennett ",
    "birthLocation": "St. Joseph, Missouri, U.S.",
  },

  "dylan": {
   " age": 39,
    "birthName": "dylan  ",
    "birthLocation": " U.S.",
  }
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers["dylan"]);
  }
  // response.json(rappers)
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is listening on  port ${PORT}`);
});
