const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log("Serveur en cours d'exécution sur le port 3000 ");
});