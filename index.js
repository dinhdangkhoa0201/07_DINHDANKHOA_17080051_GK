const express = require('express');
const bodyParser = require('body-parser');
const indexRoute = require('./route/index.route');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
    console.log('Ket noi thanh cong, port ', port);
})

app.use('/maytinhs', indexRoute);