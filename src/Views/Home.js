import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<Navigation />
			<main className="cover-container container">
				<h2>Egil Skjelbred</h2>
				<h1>Webutvikler</h1>
				<p>Skap en profil på internett som du kan være stolt over. </p>
				<p>En hjemmeside i dag skal tiltrekke kunder som aldri før.</p>
				<p>
					<Link to="/portfolio">Sjekk ut min portefølje &#62;</Link>
				</p>
			</main>
			<Footer />
		</>
	);
}

export default Home;
