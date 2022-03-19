const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.json({ status: 1, message: 'it works.'});
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}, http://localhost:${PORT}`);
});