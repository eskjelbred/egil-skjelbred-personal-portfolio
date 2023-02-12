import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function About() {
	return (
		<>
			<Navigation />
			<main className="cover-container container">
				<h1 className="mb-4">Hvem jeg er...</h1>
				<p>Mitt navn er Egil,</p>
				<article className="col-md-8">
					<p>
						Født og oppvokst i Sandefjord og med en stor interesse for webutvikling.
						<br />
						Utdannet som frontend-utvikler via Noroff og har jobbet med utvikling og som foreleser i faget.
					</p>
					<p>
						Jeg har laget hjemmesider for personer og firmaer som har alt fra par besøk i uken til flere hundre om
						dagen, mitt fokus er å lage sider som er elegante, enkle og skalerbare til ditt behov. Jeg har erfaring i
						HTML, CSS, JavaScript, React og utvikler sider fra bunn av eller i f.eks WordPress om det er ønskelig.
						<br /> Jeg har også god erfaring innen redigering av bilder, logoer og brosjyrer. Med gode kontakter i
						miljøet kan jeg også tilby gode løsninger innen markedsføring på nettet.
					</p>
					<p>Jeg tar på meg de fleste oppdrag innen utvikling av hjemmesider, både store som små.</p>
					<p>
						<Link to="/contact">Ta kontakt med meg &#62;</Link>
					</p>
				</article>
			</main>
			<Footer />
		</>
	);
}

export default About;
