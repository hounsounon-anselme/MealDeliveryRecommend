const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const bodyParser = require('body-parser'); // Vous pouvez utiliser bodyParser ou express.json()
const cors = require('cors');
const path = require('path');
// Spécifiez le chemin vers le répertoire public contenant les images
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Configurez Express pour servir des fichiers statiques depuis le répertoire public
//app.use('/images', express.static(publicImagePath));


app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log("Serveur en cours d'exécution sur le port 3000 ");
});