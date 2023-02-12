import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

function Navigation() {
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

                            {user ? (
                                <>
                                    <Nav.Link href="/admin" className="text-light">
                                        Admin
                                    </Nav.Link>

                                    <Nav.Link href="/login" className="text-light" onClick={() => auth.signOut()}>
                                        Logg ut
                                    </Nav.Link>
                                </>
                            ) : (
                                <Nav.Link href="login" className="text-light">
                                    Logg inn
                                </Nav.Link>
                            )}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Navigation;
