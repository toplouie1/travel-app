const express = require("express");
const app = express();
const cors = require("cors");

// import the places controller
const placesController = require("./controllers/placesController.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("<h1>Welcome to our travel app</h1>");
});

// so now the places would be /places which is connect to line 7
app.use("/places", placesController);

module.exports = app;
