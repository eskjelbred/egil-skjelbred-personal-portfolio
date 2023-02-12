import React, { useState } from "react";
import { Col, Row, Card, Modal, CloseButton } from "react-bootstrap";
import image from "../../assets/Skjermbilde 2023-02-12 kl. 14.51.09.png";

function EventItem() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header className="bg-dark text-light">
					<Modal.Title>
						<h2>Semester project</h2>
					</Modal.Title>
					<CloseButton variant="white" />
				</Modal.Header>
				<Modal.Body className="bg-dark text-light">
					<img className="img-fluid mb-3" src={image} alt="" />
					<span>
						The semester project January 22 we were to build a frontend for a e-commerce website with both
						customer-facing and admin sections. We were free to choose the theme and tool to create this website, my
						choice was using Bootstrap and SASS which was something I wasn't familier with. We also had to follow these
						bulletpoints for the assignment: Build a frontend with home, product list, product detail and cart pages.
						Build admin pages to create, update and delete products. The website must be responsive on all devices.
						Building a checkout and payment system is not a part of the project.
					</span>
					<Row className="justify-content-around">
						<Col className="mt-3 text-end">
							<a
								href="https://github.com/eskjelbred/egil-skjelbred-semester-project-2"
								target="_blank"
								rel="noreferrer"
							>
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
					<Card.Title>Semester project</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
}

export default EventItem;
