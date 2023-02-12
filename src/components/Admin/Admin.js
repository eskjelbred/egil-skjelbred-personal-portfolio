import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import ControlPanel from "./ControlPanel";

function Admin() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			const user = {
				uid: userAuth?.uid,
				email: userAuth?.email,
			};
			if (userAuth) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
		return unsubscribe;
	}, []);

	console.log(user);

	return !user ? (
		<>
			<Navigation />
			<div className="container text-center">
				Du er ikke innlogget, trykk
				<Link to="/login"> her </Link>
				for å logge inn
			</div>
			<Footer />
		</>
	) : (
		<>
			<Navigation />
			<div className="container flex-grow-1">
				<p className="my-5 display-6">Velkommen Egil!</p>
				<ControlPanel />
			</div>
			<Footer />
		</>
	);
}

export default Admin;
