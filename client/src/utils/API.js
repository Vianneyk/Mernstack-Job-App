import axios from "axios";

export default {
	findJobs: function (query) {
		return axios.get("/api/github", {
			params: {
				search: query,
			},
		});
	},
};
