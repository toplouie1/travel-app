import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function DisplayOnePlace() {
	const [place, setPlace] = useState({});

	let API = process.env.REACT_APP_API_URL;

	const { id } = useParams();

	useEffect(() => {
		axios
			.get(API + "/places/" + id)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return <div>Display Onee {id}</div>;
}

export default DisplayOnePlace;
