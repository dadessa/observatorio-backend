const mongoose = require('mongoose');

const SubmissaoSchema = new mongoose.Schema({
    tipo: String,
    conteudo: String,
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submissao', SubmissaoSchema);
