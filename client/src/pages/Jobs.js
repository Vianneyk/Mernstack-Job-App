import React, { useState } from "react";

import API from "../utils/API";

const { findJobs } = API;

const Job = () => {
	const [search, setsearch] = useState("I'm tired");
	const [jobs, setJobs] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();

		findJobs(search)
			.then(({data}) => setJobs(data))
			.catch(err => console.log(err));
	};

	const handleChange = e => {
		setsearch(e.target.value);
	};

	const handleApplyClick = (link) =>{
		window.open(link, "_blank")
	};
	//not functional
	const handleSaveClick = (link) => {
		window.open(link, "_blank")
	}
	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<input value={search} onChange={handleChange} />
					<button role="submit">Search</button>
				</form>
			</div>
			<div>
				<ul>
					{jobs.map((job, index) => {
						return <li key={index}>{job.title}
						<button onClick ={() => handleApplyClick(job.company_url)}>Apply</button>
						<button onClick ={() => handleSaveClick()}>Save</button>
						</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Job;
