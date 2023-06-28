const express =require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// cors permite que te conectes a otro servidor

const cors =require('cors')

//conectar mongoose
mongoose.connect('mongodb+srv://krisnarocabado:zoharrama@cluster0.aosxxdr.mongodb.net/?retryWrites=true&w=majority',
console.log('Db on')
)

// crear el servidor
const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

// Rutas de la app
app.use('/', routes());

// carpeta publica
app.use(express.static('uploads'));

// puerto
app.listen(5099);