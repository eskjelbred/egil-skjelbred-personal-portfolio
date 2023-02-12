import React, { useState } from "react";
import { Col, Row, Card, Modal, CloseButton } from "react-bootstrap";
import Moment from "react-moment";
import "moment/locale/nb";

function EventItem({ id, title, description, imageUrl, url, createdAt }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	console.log(url);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header className="bg-dark text-light">
					<Modal.Title>
						<h2>{title}</h2>
					</Modal.Title>
					<CloseButton variant="white" />
				</Modal.Header>
				<Modal.Body className="bg-dark text-light">
					<img className="img-fluid mb-3" src={imageUrl} alt={"A thumbnail of " + title + "'s logo"} />
					<span>{description}</span>
					<Row className="justify-content-around">
						<Col className="mt-3">
							<span>Publisert: </span>
							<Moment locale="nbNO" fromNow ago>
								{createdAt}
							</Moment>{" "}
							siden
						</Col>
						<Col className="mt-3 text-end">
							<a href={"https://" + url} target="_blank" rel="noreferrer">
								{url}
							</a>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
			<Card key={id} className="project-card" style={{ width: "18rem" }}>
				<Card.Img variant="top" className="bg-dark project-card__img" src={imageUrl} />
				<div className="overlay">
					<div className="text">
						<span className="text-cta" onClick={handleShow}>
							Les mer &#62;
						</span>
					</div>
				</div>
				<Card.Body className="bg-dark p-4 pt-3 pb-2">
					<Card.Title>{title}</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
}

export default EventItem;
