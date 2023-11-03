const Sequelize = require('sequelize');
const sequelizeConfig = require('./database-config.js');

const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password, {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
    }
);
console.log(process.env.NODE_ENV); // Affiche la valeur de NODE_ENV


// Vérifiez la connexion à la base de données
sequelize
    .authenticate()
    .then(() => {
        console.log('Connexion à la base de données établie avec succès');
    })
    .catch((err) => {
        console.error('Impossible de se connecter à la base de données:', err);
    });
    
//synchronisation
sequelize.sync()
  .then(() => {
    console.log('Base de données synchronisée.');
  })
  .catch(error => {
    console.error('Erreur lors de la synchronisation de la base de données :', error);
  });

module.exports = sequelize;
