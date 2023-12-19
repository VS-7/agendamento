const { model, Schema } = require('mongoose');

const quadraSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatório!'],
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: String,
    dateCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Quadra', quadraSchema);