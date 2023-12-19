const { Schema, model } = require('mongoose');

const arquivoSchema = new Schema({
    referenceId: {
        type: Schema.Types.ObjectId,
    },
    /*
    model: {
        type: String,
        required: true,
        enum: ['']
    },
    */
    path: {
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = model('Arquivo', arquivoSchema);
