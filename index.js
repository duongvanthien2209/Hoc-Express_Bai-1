const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views'); // Set folder cho các view
app.set('view engine', 'pug'); // Set view engine là pug

const data = [
    {id: 1, name: 'Thien', age: 24},
    {id: 2, name: 'Thao', age: 24},
    {id: 3, name: 'Huy', age: 22}
];

app.get('/', function (req, res) {
    res.render('index', { title: 'List', list: data });
});

app.get('/search', (req,res) => {
    let name = req.query.name;
    res.render('index', { title: 'List', list: data.filter(item => item.name.indexOf(name) !== -1) })
});

app.get('/index', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));