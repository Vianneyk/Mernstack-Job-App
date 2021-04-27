import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Badge, Button, Collapse } from "react-bootstrap";

import API from "../utils/API";

const { findJobs } = API;

const Job = () => {
	const [search, setSearch] = useState("");
	const [jobs, setJobs] = useState([]);
	const [open, setOpen] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		findJobs(search)
			.then(({ data }) => setJobs(data))
			.catch(err => console.log(err));
	};

	const handleChange = e => {
		setSearch(e.target.value);
	};

	const handleApplyClick = link => {
		window.open(link, "_blank");
	};
	//not functional
	const handleSaveClick = link => {
		window.open(link, "_blank");
	};
	return (
		<Card>
			<div>
				<form onSubmit={handleSubmit}>
					<input value={search} onChange={handleChange} />
					<button role="submit">Search</button>
				</form>
			</div>
			<div>
				<ul>
					{jobs.map((job, index) => {
						return (
							<Card className="mb-3">
								<Card.Body>
									<div className="d-flex justify-content-between">
										<div>
											<Card.Title>
												{job.title} -{" "}
												<span className="text-muted font-weight-light">
													{job.company}
												</span>
											</Card.Title>
											<Card.Subtitle className="text-muted mb-2">
												{new Date(job.created_at).toLocaleDateString()}
											</Card.Subtitle>
											<Badge variant="secondary" className="mr-2">
												{job.type}
											</Badge>
											<Badge variant="secondary">{job.location}</Badge>
											<div
												style={{ wordBreak: "break-all" }}
												dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
											></div>
											<Card.Text>
												<Button
													onClick={() => setOpen(prevOpen => !prevOpen)}
													variant="primary"
												>
													{open ? "Hide Details" : "View Details"}
												</Button>
											</Card.Text>
											<Collapse in={open}>
												<div
													className="mt-4"
													dangerouslySetInnerHTML={{ __html: job.description }}
												></div>
											</Collapse>
										</div>
										<img
											className="d-none d-md-block"
											height="50"
											alt={job.company}
											src={job.company_logo}
										/>
									</div>
								</Card.Body>
							</Card>
						);
					})}
				</ul>
			</div>
		</Card>
	);
};

export default Job;
