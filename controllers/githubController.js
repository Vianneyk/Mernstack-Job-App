const axios = require("axios");

module.exports = {
	search: function (req, res) {
		const { search } = req.query;

		axios
			.get("https://jobs.github.com/positions.json", {
				params: search,
			})
			.then(response => {
				console.log("response: ", response);

				res.json(response.data);
			})
			.catch(err => res.status(422).json(err));
	},
};

// need to test the api
