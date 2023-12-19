const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatório.'],
    },
    email: {
      type: String,
      required: [true, 'E-mail é obrigatório.'],  
    },
    password: {
        type: String,
        default: null,
    },
    sexo: {
        type: String,
        required: true,
        enum: ['M', 'F'],
    },
    profileImage: String,
    dateRegister: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('User', userSchema)