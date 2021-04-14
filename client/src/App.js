import React, { useState } from "react";
import axios from "axios";

function App() {
	const [title, setTitle] = useState("");
	const [skills, setSkills] = useState("");
	const [location, setLocation] = useState("");
	const [salary, setSalary] = useState("");
	const [description, setDescription] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		const postData = {
			title,
			skills,
			location,
			salary,
			description,
			email,
		};

		axios({
			url: "/api/save",
			method: "POST",
			data: postData,
		})
			.then(() => {
				console.log("Data sent to server");
			})
			.catch(() => {
				console.log("Server error");
			});
	};

	return (
		<div>
			<h2>Welcome to my MERN Job app</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-input">
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-input">
					<input
						type="text"
						name="skills"
						placeholder="Skills"
						value={skills}
						onChange={e => setSkills(e.target.value)}
					/>
				</div>
				<div className="form-input">
					<input
						type="text"
						name="location"
						placeholder="Location"
						value={location}
						onChange={e => setLocation(e.target.value)}
					/>
				</div>
				<div className="form-input">
					<input
						type="text"
						name="salary"
						placeholder="Salary"
						value={salary}
						onChange={e => setSalary(e.target.value)}
					/>
				</div>
				<div className="form-input">
					<textarea
						name="description"
						placeholder="Description"
						cols="30"
						rows="10"
						value={description}
						onChange={e => setDescription(e.target.value)}
					></textarea>
				</div>
				<div className="form-input">
					<input
						type="text"
						name="email"
						placeholder="Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
