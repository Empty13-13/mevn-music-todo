const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')

// настройка подключения к бд
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:82920zxc@cluster0.dgpcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});
client.connect(err => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	console.log(err);
	client.close();
});
// инициализация приложения
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

//объявление роута
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server running at ${PORT}`)