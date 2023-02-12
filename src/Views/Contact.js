import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

function Contact() {
	const SITE_KEY = "6LfAc3siAAAAACNg5kSwloOKNyvEmxKHgkd0myQG";

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_9o4cjbf", "template_szmdhhq", e.target, "v3E0sf8yRz6rBVtzx").then(
			(result) => {
				window.location.reload();
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	return (
		<>
			<Navigation />
			<main className="cover-container container">
				<h1 className="mb-4">Kontakt meg</h1>
				<p>
					Fyll ut skjemaet under eller send meg en
					<a href="mailto:egil@skjelbred-design.no?subject=Hei, jeg så hjemmesiden din..."> epost</a>, er du nysjerrig
					på mitt tidligere arbeid, sjekk ut
					<Link to="/portfolio"> min portefølje &#62;</Link>
				</p>
				<Form className="pb-5 col-md-8" onSubmit={sendEmail}>
					<Form.Group className="mb-3" controlId="from_name">
						<Form.Label>Navn</Form.Label>
						<Form.Control type="text" className="bg-dark text-white" name="from_name" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="from_phone">
						<Form.Label>Telefon</Form.Label>
						<Form.Control type="number" className="bg-dark text-white" name="from_phone" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="from_email">
						<Form.Label>Epost</Form.Label>
						<Form.Control type="email" className="bg-dark text-white" name="from_email" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="from_message">
						<Form.Label>Melding</Form.Label>
						<Form.Control as="textarea" className="bg-dark text-white" rows={4} name="from_message" />
					</Form.Group>
					<ReCAPTCHA sitekey={SITE_KEY} />
					{/* <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-top`}>Not working due to no php-support at current hostingservice.</Tooltip>}> */}
					<Button variant="dark" className="border-white mt-3" type="submit">
						Send melding
					</Button>
					{/* </OverlayTrigger> */}
				</Form>
			</main>
			<Footer />
		</>
	);
}

export default Contact;
