const express = require("express");
const hbs = require("hbs");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
// Handlebars
//var hbs = require('hbs');
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

//servir contenido est[atico] (middilware)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Mariano Burgos",
    titulo: "Curso de node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic",{
    nombre: "Mariano Burgos",
    titulo: "Curso de node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements",{
    nombre: "Mariano Burgos",
    titulo: "Curso de node",
  });
});


app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
