const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const smtpTransport = require("nodemailer-smtp-transport");

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) => {
		req.sendFile(path.resolve(__dirname, "build", "index.html"));
	});
}

const oauth2Client = new OAuth2(
	process.env.OAUTH_CLIENTID,
	process.env.OAUTH_CLIENT_SECRET,
	"https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
	refresh_token:
		"1//04q9AQxmJRUBeCgYIARAAGAQSNwF-L9IrX_9culHkw6g_0Or5bmEHPwZ5t95di1kbxq4B4PfNRy9mFHW6iNyAu8UtXm2OeYyk-50",
});
const accessToken = oauth2Client.getAccessToken();

let transporter = nodemailer.createTransport(
	smtpTransport({
		service: "gmail",

		auth: {
			type: "OAuth2",
			user: process.env.EMAIL,
			pass: process.env.WORD,
			clientId: process.env.OAUTH_CLIENTID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
			refreshToken: process.env.OAUTH_REFRESH_TOKEN,
			accessToken: accessToken,
		},
		tls: {
			rejectUnauthorized: false,
		},
	})
);

transporter.verify((err, success) => {
	err
		? console.log(err)
		: console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
	let mailOptions = {
		from: `${req.body.mailerState.email}`,
		to: "mazurek321.dev@gmail.com",
		subject: `Nowa wiadomość od ${req.body.mailerState.name} ( ${req.body.mailerState.email} ), temat: ${req.body.mailerState.subject}`,
		text: `${req.body.mailerState.message}`,
	};

	transporter.sendMail(mailOptions, function (err, response) {
		if (err) {
			console.log(err);
			res.json({
				status: "fail",
			});
		} else {
			console.log("== Message Sent ==");
			res.json({
				status: "success",
			});
		}
		transporter.close();
	});
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
