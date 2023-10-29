// userController.js
const { User } = require('../models'); // Importez le modèle User depuis le fichier modèle

// Exemple d'action pour la création d'un utilisateur
const createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
};

module.exports = { createUser };