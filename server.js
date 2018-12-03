require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
require("bourbon").includePaths

var PORT = process.env.PORT || 6565;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);


app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
