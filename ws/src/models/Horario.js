const { Schema, model } = require('mongoose');

const horarioSchema = new Schema({
    quadraId: {
        type: Schema.Types.ObjectId,
        ref: 'Quadra',
        required: true,
    },
    days: {
        type: [Number],
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    dateCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Horario', horarioSchema);
