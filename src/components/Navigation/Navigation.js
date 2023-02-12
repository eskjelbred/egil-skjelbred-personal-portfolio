import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

function Navigation() {
	return (
		<Navbar bg="dark" variant="dark" expand={false} className="mb-auto">
			<Container>
				<Navbar.Brand href="/">Skjelbred.dev</Navbar.Brand>

				<Navbar.Toggle className="ms-auto" aria-controls="offcanvasNavbar" />
				<Navbar.Offcanvas id="offcanvasNavbar" placement="end">
					<Offcanvas.Header className="bg-dark">
						<Offcanvas.Title className="text-light" id="offCanvasNavbarLabel">
							Meny
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body className="bg-dark">
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="/" className="text-light">
								Hjem
							</Nav.Link>
							<Nav.Link href="/about" className="text-light">
								Om meg
							</Nav.Link>
							<Nav.Link href="portfolio" className="text-light">
								Portfolio
							</Nav.Link>
							<Nav.Link href="contact" className="text-light">
								Kontakt
							</Nav.Link>
							<hr />
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}

export default Navigation;
