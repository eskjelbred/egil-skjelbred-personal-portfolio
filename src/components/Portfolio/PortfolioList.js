import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiUrl from "../../constants/ApiUrl";
import PortfolioItem from "./PortfolioItem";

function PortfolioList() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios
			.get(ApiUrl)
			.then((res) => {
				const result = res.data;
				setProjects(result);
			})
			.catch((error) => {
				console.log("something went wrong with connecting to the server: ", error.message);
			});
	}, []);

	return (
		<>
			<div className="container d-flex flex-wrap justify-content-between" style={{ rowGap: "50px" }}>
				{projects.map(function (project) {
					const id = project.id;
					const title = project.title;
					const description = project.description;
					const imageUrl = project.imageUrl;
					const url = project.url;
					const createdAt = project.createdAt;
					return (
						<PortfolioItem
							key={id}
							title={title}
							description={description}
							imageUrl={imageUrl}
							url={url}
							createdAt={createdAt}
						/>
					);
				})}
			</div>
			<div className="container d-flex flex-wrap justify-content-center mt-5">
				Grunnet andre oppdrag har ikke denne siden blitt oppdatert på en god stund, men flere prosjekter vil komme med
				tiden...
			</div>
		</>
	);
}

export default PortfolioList;
