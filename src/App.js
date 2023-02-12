import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Portfolio from "./Views/Portfolio";
import Contact from "./Views/Contact";
import ContactSuccess from "./Views/ContactSuccess";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/contact-success" element={<ContactSuccess />} />
		</Routes>
	);
}

export default App;
