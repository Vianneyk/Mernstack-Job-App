import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Post from "./pages/Post";
import Blog from "./pages/Blog";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Auth0ProviderWithHistory from "./auth0Provider";

function App() {
	return (
		<Auth0ProviderWithHistory>
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/jobs" component={Jobs} />
					<Route exact path="/post" component={Post} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/profile" component={Profile} />
				</Switch>
			</div>
		</Router>
		</Auth0ProviderWithHistory>

	);
}

export default App;
// function App() {
// 	const [title, setTitle] = useState("");
// 	const [skills, setSkills] = useState("");
// 	const [location, setLocation] = useState("");
// 	const [salary, setSalary] = useState("");
// 	const [description, setDescription] = useState("");
// 	const [email, setEmail] = useState("");

// 	// ID df5ece9c
// 	// Key ebdf5437d71343a3fb82beef8bcb715c

// 	const fetchData = () => {
// 		const jobApiOne = "https://www.balldontlie.io/api/v1/players/237";
// 		const jobApiTwo =
// 			"http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=df5ece9c&app_key=ebdf5437d71343a3fb82beef8bcb715c&results_per_page=20&what=javascript%20developer&content-type=application/json";

// 		const getNewJob = axios.get(jobApiOne);
// 		const getOldJob = axios.get(jobApiTwo);
// 		axios.all([getNewJob, getOldJob]).then(
// 			axios.spread((...allData) => {
// 				const allDataJobOne = allData[0];
// 				const getAllDataJobTwo = allData[1];

// 				console.log(allDataJobOne);
// 				console.log(getAllDataJobTwo);
// 			})
// 		);
// 	};

// 	useEffect(() => {
// 		fetchData();
// 	}, []);

// 	const handleSubmit = e => {
// 		e.preventDefault();

// 		const postData = {
// 			title,
// 			skills,
// 			location,
// 			salary,
// 			description,
// 			email,
// 		};

// 		axios({
// 			url: "/api/save",
// 			method: "POST",
// 			data: postData,
// 		})
// 			.then(() => {
// 				console.log("Data sent to server");
// 			})
// 			.catch(() => {
// 				console.log("Server error");
// 			});
// 	};

// 	return (
// 		<div>
// 			<h2>Welcome to my MERN Job app</h2>

// 			<form onSubmit={handleSubmit}>
// 				<div className="form-input">
// 					<input
// 						type="text"
// 						name="title"
// 						placeholder="Title"
// 						value={title}
// 						onChange={e => setTitle(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-input">
// 					<input
// 						type="text"
// 						name="skills"
// 						placeholder="Skills"
// 						value={skills}
// 						onChange={e => setSkills(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-input">
// 					<input
// 						type="text"
// 						name="location"
// 						placeholder="Location"
// 						value={location}
// 						onChange={e => setLocation(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-input">
// 					<input
// 						type="text"
// 						name="salary"
// 						placeholder="Salary"
// 						value={salary}
// 						onChange={e => setSalary(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-input">
// 					<textarea
// 						name="description"
// 						placeholder="Description"
// 						cols="30"
// 						rows="10"
// 						value={description}
// 						onChange={e => setDescription(e.target.value)}
// 					></textarea>
// 				</div>
// 				<div className="form-input">
// 					<input
// 						type="text"
// 						name="email"
// 						placeholder="Email"
// 						value={email}
// 						onChange={e => setEmail(e.target.value)}
// 					/>
// 				</div>
// 				<button>Submit</button>
// 			</form>
// 		</div>
// 	);
// }

// export default App;
