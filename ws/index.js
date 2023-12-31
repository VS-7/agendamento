const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// VARIABLES
app.set('port', 8000);

// ROTAS
app.use('/Quadra' ,require('./src/routes/Quadra.routes'))

app.listen(app.get('port'), () => {
    console.log(`WS Escutando na porta ${app.get('port')}`);
});