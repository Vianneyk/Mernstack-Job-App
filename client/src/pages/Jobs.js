import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import API from "../utils/API";

const { findJobs } = API;

const Job = () => {
	const [search, setSearch] = useState("");
	const [jobs, setJobs] = useState([]);

	// useEffect(() => {
	// 	loadJobs()
	//   }, [])
	
	//   function loadJobs() {
	// 	API.findJobs()
	// 	  .then(res => 
	// 		setJobs(res.data)
	// 	  )
	// 	  .catch(err => console.log(err));
	//   };

	const handleSubmit = e => {
		e.preventDefault();

		findJobs(search)
			.then(({data}) => setJobs(data))
			.catch(err => console.log(err));
	};

	const handleChange = e => {
		setSearch(e.target.value);
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
						return <div> <li key={index}>{job.title}
						<a href = {job.company_url}>
						<img src = {job.company_logo} width= "200px" alt ="company logo"/>
						</a>
						<p>{job.location}</p>
						<p>{job.description}</p>
						<button onClick ={() => handleApplyClick(job.how_to_apply)}>Apply</button>
						<button onClick ={() => handleSaveClick()}>Save</button>
						</li>
						</div>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Job;
