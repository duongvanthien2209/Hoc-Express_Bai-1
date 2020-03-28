const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views'); // Set folder cho các view
app.set('view engine', 'pug'); // Set view engine là pug

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', name: 'Thien', list: [{name: 'Thien', age: 24}, {name: 'Thao', age: 24},] })
});

app.get('/index', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));