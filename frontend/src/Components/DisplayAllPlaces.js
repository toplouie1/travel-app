import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DisplayAllPlaces() {
	const [places, setPlaces] = useState([]);

	const API = process.env.REACT_APP_API_URL;

	useEffect(() => {
		axios
			.get(API + "/places")
			.then((res) => {
				setPlaces(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	let placesToDisplay = places.map((place, index) => {
		return (
			<li>
				key = {index} {place.name} {place.city}
				<Link to="/places/${place.id}">Details</Link>
			</li>
		);
	});

	return (
		<div>
			<div>Display cAll Places</div>
			<ul>{placesToDisplay}</ul>
		</div>
	);
}

export default DisplayAllPlaces;
