const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const shortid = require('shortid'); // Tạp chuỗi ngẫu nhiên ID
const port = 3000;

// Lowdb
const db = require('./db');

db.defaults({ users: [] }).write();

app.set('views', './views'); // Set folder cho các view
app.set('view engine', 'pug'); // Set view engine là pug

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const userRoute = require('./routes/user.route');

app.use('/users', userRoute);

app.get('/create', (req,res) => {
    res.render('create');
});

app.post('/create', (req,res) => {
    let { name, age } = req.body;
    db.get('users').push({ id: shortid.generate(), name, age: parseInt(age) }).write();
    res.redirect('/users');
});

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));