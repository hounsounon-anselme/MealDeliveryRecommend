const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const bodyParser = require('body-parser'); // Vous pouvez utiliser bodyParser ou express.json()
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log("Serveur en cours d'exécution sur le port 3000 ");
});