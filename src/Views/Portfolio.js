import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import PortfolioList from "../components/Portfolio/PortfolioList";

function Portfolio() {
	return (
		<>
			<Navigation />
			<main className="cover-container container">
				<h1>Mitt arbeid</h1>
				<article className="col-md-8">
					<p>
						Her ser du en litt av mitt tidligere arbeid, denne siden er under utvikling og det er derfor endel manglende
						innhold for øyeblikket.{" "}
					</p>
					<p>
						Du kan alltids også sjekke ut min <a href="https://github.com/eskjelbred">Github</a>, kanskje du finner noe
						spennende der!
					</p>
					<p>
						<Link to="/contact">Ta kontakt med meg &#62;</Link>
					</p>
				</article>
			</main>
			<PortfolioList />
			<Footer />
		</>
	);
}

export default Portfolio;
