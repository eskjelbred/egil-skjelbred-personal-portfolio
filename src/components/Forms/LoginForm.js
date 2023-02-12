import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { signIn } from "../../utils/handleLogin";

function LoginForm() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	return (
		<Form className="d-flex row align-items-center m-auto mt-5">
			<Form.Group className="mb-3" controlId="identifier">
				<Form.Control type="email" name="identifier" ref={emailRef} placeholder="bruker@epost.no" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="password">
				<Form.Control type="password" name="password" ref={passwordRef} placeholder="********" />
			</Form.Group>

			<Button variant="primary" className="text-light w-50 m-auto mt-3" onClick={signIn}>
				LOGG INN
			</Button>
		</Form>
	);
}

export default LoginForm;
