import React, { useState } from "react";

import API from "../utils/API";

const { findJobs } = API;

const Job = () => {
	const [search, setsearch] = useState("I'm tired");
	const [jobs, setJobs] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();

		findJobs(search)
			.then(response => setJobs(response))
			.catch(err => console.log(err));
	};

	const handleChange = e => {
		setsearch(e.target.value);
	};

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
						return <li key={index}>{job.title}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Job;
