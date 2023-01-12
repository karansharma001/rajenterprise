const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("./public"));

const products = require("./public/data/products");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { productItems: products });
});

app.get("/products", (req, res) => {
  res.render("products", { productItems: products });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/pd/:id", (req, res) => {
  console.log(products[req.params.id]);
  res.render("pd", { productItems: products, pId: req.params.id });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App listening at port 3000");
});
