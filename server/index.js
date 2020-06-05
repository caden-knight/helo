require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const app = express();
const authCtrl = require('./controllers/authCtrl');

app.use(express.json());

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
		secret: SESSION_SECRET
	})
);

app.post('/api/auth/register', authCtrl.register); 

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false }
})
	.then((db) => {
		app.set('db', db);
		console.log("aye aye cap'n");
		app.listen(SERVER_PORT, () => console.log(`People of port ${SERVER_PORT} ALL ABOARD`));
	})
	.catch((err) => console.log(err));


