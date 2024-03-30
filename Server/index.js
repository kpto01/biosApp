const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const app = express();



// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/auth',authRouter)
// MOONGO DB CONNECTIONS
mongoose.connect('mongodb+srv://psanchez101:BEyqdL31MtQTdr6g@clustertest.65aczcu.mongodb.net/Mongodb')
    .then(() => console.log('Conexión exitosa a MongoDB!'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));


// GLOBAL ERRORS HANDLER   
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    res.status(statusCode).json({
        status: status,
        message: err.message,
    });
});


// SERVER
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});