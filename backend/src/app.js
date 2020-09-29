var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jogador = require('./routes/jogador'); 
var config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (res, req) => req.send('Bem vindo a api'));
app.use('/api/jogadores', jogador);

console.log(process.env.MONGODB_URI);
console.log(config.mongodburl);

var mongoDB = process.env.MONGODB_URI || config.mongodburl;

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao mongodb:'));

var port = config.porta;

mongoose.connect(mongoDB);
app.listen(port, () => {
    console.log('Serviço está em execução na porta ' + port);
});
