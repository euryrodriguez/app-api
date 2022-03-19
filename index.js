const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
let corsOptions  = {
    origin: '*'
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.json({ status: 1, message: 'it works.'});
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}, http://localhost:${PORT}`);
});