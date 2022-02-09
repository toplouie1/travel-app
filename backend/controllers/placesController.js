const express = require("express");
const places = express.Router();

const { getAllPlaces, getOnePlace } = require("../queries/places.js");

places.get("/", async (req, res) => {
	try {
		const allPlaces = await getAllPlaces();
		if (allPlaces[0]) {
			res.status(200).json(allPlaces);
		} else {
			res.status(500).json({ error: "No places were returned from db" });
		}
	} catch (err) {
		console.log(err);
	}
});

places.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const places = await getOnePlace(id);
		if (places.id) {
			res.status(200).json(places);
		} else {
			res.status(500).json({ error: " place was not returned" });
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = places;
