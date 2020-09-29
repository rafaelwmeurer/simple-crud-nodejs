var jogador = require('../models/jogador');

exports.jogadorCreate = function (req, res) {
    var jogador = new jogador(
        {
            nome: req.body.nome,
            valor: req.body.valor,
            idade: req.body.idade
        }
    );

    jogador.save(function (err, jogadorResult) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }

        res.statusCode = 201;
        res.json(jogadorResult)
    })
};

exports.jogadorDetails = function (req, res) {
    jogador.findById(req.params.id, function (err, jogador) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.json(jogador);
    })
};

exports.jogadorAll = function (req, res) {
    jogador.find({}, function (err, jogador) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.json(jogador);
    })
};

exports.jogadorUpdate = function (req, res) {
    jogador.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, jogador) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.statusCode = 204;
        res.send('');
    });
};

exports.jogadorDelete = function (req, res) {
    jogador.findByIdAndRemove(req.params.id, function (err) {
                
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.statusCode = 204;
        res.send('');
    })
};