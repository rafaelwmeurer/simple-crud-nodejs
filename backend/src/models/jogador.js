var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jogadorSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    idade: {type: Number, required: true},
    valor: {type: Number, required: true},
});

module.exports = mongoose.model('jogador', jogadorSchema);