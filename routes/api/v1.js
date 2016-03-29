router = require('express').Router();
var models =  require('../../models/v1.js');

function retornarErroAoUsuario(req, res, error) {
	res.statusCode(500);
	res.json({ error: error });
}

exports.module = function(dbConnection) {
	//Using restful, get parameter and call of models for operate.
	router.put('/residencia/', function (req, res) {
		ResidenciaModel.createUser(
			{
			nome: reg.body.nome,
			curso: reg.body.curso,
			matricula: reg.body.matricula,
			senha: reg.body.senha,
			apartamento: reg.body.apartamento,
			bloco: reg.body.bloco
			},
			function (error, id){
				if (error) return retornarErroAoUsuario(req, res, error);
				res.json({ id: id });
		});
	});
/*	//Using restful, get parameter and call of models for operate.
	router.delete('/residencia/:id', function (req, res) {
		ResidenciaModel.deleteHashtag({ id: req.params.id }, function (err, data) {
			if (error) return retornarErroAoUsuario(req, res, error);
			res.json({ ok: 1 });
		});
	});
	//Using restful, get parameter and call of models for operate.
	router.get('/residencia/', function (req, res) {
		ResidenciaModel.findHashtagsByDate({ date: req.body.data,
										  amount : req.body.amount },
		function (err, data) {
			if (error) return retornarErroAoUsuario(req, res, error);
			res.json(data);
		});
	});
*/
	return router;
}