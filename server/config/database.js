const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect("mongodb+srv://shivanshumishra:8736955859@cluster0.hvbcah3.mongodb.net/AuthApp", {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
