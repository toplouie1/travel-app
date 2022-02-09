import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DisplayAllPlaces from "./Components/DisplayAllPlaces";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import DisplayOnePlace from "./Components/DisplayOnePlace";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/places" element={<DisplayAllPlaces />} />
				<Route path="/places/:id" element={<DisplayOnePlace />} />
			</Routes>
		</Router>
	);
}

export default App;
