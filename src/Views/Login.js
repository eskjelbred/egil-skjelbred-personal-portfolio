import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Forms/LoginForm";

function Login() {
	return (
		<>
			<Navigation />
			<main className="cover-container container">
				<h1 className="mb-4">Hei!</h1>
				<p>
					Denne siden er ment for registrerte kunder, dersom du har ett aktivt abonnement hos meg kan du ta kontakt med
					meg så får du tilgang til denne siden.
				</p>

				<div className="row m-auto">
					<div className="d-flex m-auto">
						<LoginForm />
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Login;
