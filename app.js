const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT  || 3000, function(){
    console.log('Servidor funcionando en el puerto 3000');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/nico', (req,res)=>{
    res.sendFile(__dirname + '/views/nico.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});