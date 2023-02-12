import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

function ContactSuccess() {
	const [showToast, setShowToast] = useState(true);

	return (
		<>
			<Toast className="bg-dark mx-auto" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
				<Toast.Header className="bg-dark">
					{/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
					<strong className="me-auto color-success">Fra Egil</strong>
					<small>Akkuratt nå</small>
				</Toast.Header>
				<Toast.Body>Din melding er sendt</Toast.Body>
			</Toast>
			<Navigation />
			<main className="cover-container container">
				<h1 className="mb-4">Takk for meldingen!</h1>
				<p>Jeg har nettopp mottatt meldingen fra deg, og vil svare så fort jeg kan.</p>
				<p>
					Hører du ikke noe fra meg i løpet av en dag eller to. Forsøk gjerne å ringe meg på{" "}
					<a href="tel:+4746848144">46 84 81 44</a>
				</p>
				<p>
					Ta meg tilbake til<Link to="/"> forsiden &#62;</Link>
				</p>
			</main>
			<Footer />
		</>
	);
}

export default ContactSuccess;
