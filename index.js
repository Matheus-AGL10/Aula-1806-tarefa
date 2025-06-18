const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './view')

app.use(express.static('public'));

app.get('/', (request, response) =>{
    response.render('home');
});

app.listen(3000, ()=>{
    console.log('Servidor execultando: porta 3000')
});