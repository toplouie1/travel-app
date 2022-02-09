const db = require("../db/dbConfig.js");

const getAllPlaces = async () => {
	try {
		const allPlaces = await db.any("SELECT * FROM places");
		return allPlaces;
	} catch (err) {
		return err;
	}
};

const getOnePlace = async (id) => {
	try {
		const price = await db.one("SELECT * FROM places WHERE id=$1", id);
		return price;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllPlaces,
	getOnePlace,
};
