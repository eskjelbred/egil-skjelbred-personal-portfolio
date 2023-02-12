import React from "react";
import PortfolioItem1 from "./PortfolioItem1";
import PortfolioItem2 from "./PortfolioItem2";
import PortfolioItem3 from "./PortfolioItem3";

function PortfolioList() {
	return (
		<div className="container d-flex flex-wrap justify-content-between" style={{ rowGap: "50px" }}>
			<PortfolioItem1 />
			<PortfolioItem2 />
			<PortfolioItem3 />
		</div>
	);
}

export default PortfolioList;
