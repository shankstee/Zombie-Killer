var express = require("express");
var db = require("./models");
var app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./routes/zombieController.js");

app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App now listening on port:", PORT);
    });
});
