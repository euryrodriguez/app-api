const express = require('express');
const cors = require('cors');
const app = express();
const indexRoute = require('./routes/index.route');
const PORT = process.env.PORT || 3000;
let corsOptions  = {
    origin: '*'
}

const db = require('./models');

db.mongoose.connect(db.url).then(function(){
    console.log('Conexión Exitosa!');
}).catch(function(err){
    console.log('No se pudo conectar a la base de datos!', err);
    process.exit();
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}, http://localhost:${PORT}`);
});