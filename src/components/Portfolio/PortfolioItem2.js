import React, { useState } from "react";
import { Col, Row, Card, Modal, CloseButton } from "react-bootstrap";
import image from "../../assets/Skjermbilde 2023-02-12 kl. 19.01.11.png";

function EventItem() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header className="bg-dark text-light">
					<Modal.Title>
						<h2>Javascript Framework</h2>
					</Modal.Title>
					<CloseButton variant="white" />
				</Modal.Header>
				<Modal.Body className="bg-dark text-light">
					<img className="img-fluid mb-3" src={image} alt="" />
					<span>
						The Javascript Frameworks Cource Assignment for September 22 we were assigned to build a React or Next.js
						app with login functionality, we was assigned to create a Wordpress or Strapi installation to manage an API
						but the markers would use their own installation, therefor this app will not fetch any events without
						creating your own API requests.
					</span>
					<Row className="justify-content-around">
						<Col className="mt-3 text-end">
							<a href="https://github.com/eskjelbred/egil-skjelbred-js-frameworks-CA" target="_blank" rel="noreferrer">
								Se på GitHub
							</a>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
			<Card className="project-card" style={{ width: "18rem" }}>
				<Card.Img variant="top" className="bg-dark project-card__img" src={image} />
				<div className="overlay">
					<div className="text">
						<span className="text-cta" onClick={handleShow}>
							Les mer &#62;
						</span>
					</div>
				</div>
				<Card.Body className="bg-dark p-4 pt-3 pb-2">
					<Card.Title>Javascript Framework</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
}

export default EventItem;
