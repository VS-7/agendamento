const { Schema, model } = require('mongoose');

const agendamentoSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    quadraId: {
        type: mongoose.Types.ObjectId,
        ref: 'Quadra',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    transactionId: {
        type: String,
    },
    dateRegister: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Agendamento', agendamentoSchema)