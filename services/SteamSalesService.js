const http = require("https");
require("dotenv").config()

const options = {
	"method": "GET",
	"hostname": "steam-store-data.p.rapidapi.com",
	"port": null,
	"path": "/api/featured/",
	"headers": {
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": process.env.RAPID_API_HOST,
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();