const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('views', './views'); // Set folder cho các view
app.set('view engine', 'pug'); // Set view engine là pug

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


const data = [
    {id: 1, name: 'Thien', age: 24},
    {id: 2, name: 'Thao', age: 24},
    {id: 3, name: 'Huy', age: 22}
];

app.get('/index', function (req, res) {
    res.render('list', { list: data });
});

app.get('/getSearch', (req,res) => {
    res.render('index');
});

app.get('/search', (req,res) => {
    let name = req.query.name;
    res.render('list', { list: data.filter(item => item.name.indexOf(name) !== -1) });
});

app.get('/create', (req,res) => {
    res.render('create');
});

app.post('/create', (req,res) => {
    let { name, age } = req.body;
    data.push({name, age: parseInt(age) });
    res.redirect('/index');
});

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));