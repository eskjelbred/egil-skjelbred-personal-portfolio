import React, { useState } from "react";
import { Col, Row, Card, Modal, CloseButton } from "react-bootstrap";
import image from "../../assets/Skjermbilde 2023-02-12 kl. 19.44.33.png";

function EventItem() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header className="bg-dark text-light">
					<Modal.Title>
						<h2>Project Exam</h2>
					</Modal.Title>
					<CloseButton variant="white" />
				</Modal.Header>
				<Modal.Body className="bg-dark text-light">
					<img className="img-fluid mb-3" src={image} alt="" />
					<span>
						A local tourism agency in Bergen is launching a new website called ‘Holidaze’ for visitors to the area to be
						able to find hotels, B&Bs and guesthouses, and for the accommodation owners to receive enquiries. The
						project required me to create the visitor side of the website where users can search accommodation and make
						enquiries, as well as the administration side where properties can be added and enquiries managed.
					</span>
					<Row className="justify-content-around">
						<Col className="mt-3 text-end">
							<a href="https://github.com/eskjelbred/egil-skjelbred-project-exam" target="_blank" rel="noreferrer">
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
					<Card.Title>Project exam</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
}

export default EventItem;
