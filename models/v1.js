/*
 * Hashtag Model
 */
 
var express =  require('express');

function ResidenciaModel (mongoConnection) {
	this.collection = mongoConnection.dbresidencia;
}

ResidenciaModel.prototype = {
	constructor: ResidenciaModel,

	// Responsible of to make parsing of data and insert elements in Mongodb
	createUser: function (args, done) {
		console.log("GET createUser, go to parsing");
		if (!args.nome || typeof args.nome !== 'string')
			return done(new Error("Argumento 'nome' inexistente/invalido"));

		if (!args.curso || typeof curso !== 'string')
			return done(new Error("Argumento 'curso' inexistente/invalido"));

		if (!args.matricula || !args.matricula.match(/[0-9]+/))
			return done(new Error("Argumento 'matricula' inexistente/invalido"));

		if (!args.senha || !args.senha.match(/[^a-zA-Z0-9_]+/))
			return done(new Error("Argumento 'senha' inexistente/invalido"));

		if (!args.apartamento || !args.apartamento.match(/[0-9]+/))
			return done(new Error("Argumento 'apartamento' inexistente/invalido"));

		if (!args.bloco || !args.bloco.match(/[a-zA-Z]+/))
			return done(new Error("Argumento 'bloco' inexistente/invalido"));

		console.log("Analyzed! Go to insertion");

		this.collection.insert({
			nome: args.nome,
			curso: args.curso,
			matricula: args.matricula,
			senha: args.senha,
			apartamento: args.apartamento,
			bloco: args.bloco
		}, function (err, data) {
			if (err) return done(err);
			return done(null, data._id);
		});
	}
/*	// Responsible of to make parsing of data and delete elements in Mongodb
	deleteHashtag: function (args, done) {
		if (!args.id)
			return done(new Error("Argumento 'ID' inexistente"));

		this.collection.remove({ id: args.id }, function (err, data) {
			if (err) return done(err, null);

			done(null, data);
		});
	},
	// Responsible of to make parsing of data and list some elements in Mongodb
	findHashtagsByDateHashtag: function (args, done) {
		if (!args.date)
			return done(new Error("Argumento 'ID' inexistente"));
		if (!args.amount)
			return done(new Error("Argumento 'ID' inexistente"));

		this.collection.find.limit(args.amount).sort( {date: args.date}, function (err, data) {
			if (err) return done(err, null);
			done(null, data);
		});
	}
	*/
}
module.exports = {
	ResidenciaModel: ResidenciaModel
};