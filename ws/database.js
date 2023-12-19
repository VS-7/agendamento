const mongoose = require('mongoose');
const URI = 'mongodb+srv://vitorDB:NeBJvco95sseYmce@gardensagendamento.jdym98g.mongodb.net/GardensAgendamento?retryWrites=true&w=majority';


mongoose
    .connect(URI)
    .then(() => console.log('DB is Up!'))
    .catch((err) => console.log(err)); 