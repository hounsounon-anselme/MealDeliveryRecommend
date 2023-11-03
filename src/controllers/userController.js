const User = require('../../models/User.js');


async function createUser(req, res) {
    try {
        const { firstName, lastName, username, CountryCode, email, password, phone } = req.body;

        if (!firstName || !lastName || !username || !CountryCode || !email || !password || !phone) {
            return res.status(400).json({ error: error.message });
        }

        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


async function getAllUsers(req, res) {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getUserById(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'Utilisateur non trouvé.' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la récupération de l\'utilisateur.' });
    }
}

async function updateUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'Utilisateur non trouvé.' });
            return;
        }
        await user.update(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur.' });
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'Utilisateur non trouvé.' });
            return;
        }
        await user.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la suppression de l\'utilisateur.' });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
