const { evalrpn } = require("./index.ts");
const express = require("express");
var parser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.set("views", "public");
app.use(express.static("public"));
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const PORT = 4000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
  let result;
  try {
    let { input } = req.body;
    if (input) {
      result = evalrpn(input);
    }
  } catch (error) {
    result = "error";
    console.log(error, "error");
  }
  res.render("index.ejs", { result });
});

app.listen(PORT, () => {
  console.log("Server écoute le port", PORT);
});
