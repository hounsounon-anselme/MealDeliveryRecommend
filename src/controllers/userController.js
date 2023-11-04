const User = require('../../models/User.js');
const Country = require('../../models/Country.js');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
=======
<<<<<<< HEAD

=======
>>>>>>> 2240e17ae5193e7b8ae00b9e5c6f52b588733b59

>>>>>>> a30ee7bedabeffeb2477e4c2c966d90bd32b4aa7

async function createUser(req, res) {
    try {
<<<<<<< HEAD
        const { firstName, lastName, username, CountryCode, email, password } = req.body;
        /* if (!firstName || !lastName || !username || !CountryCode || !email || !password) {
            return res.status(400).json({ error: error.message });


        }*/

        const country = Country.findOne({
            attributes: ['PhoneCode'],
            where: {
                CountryCode: CountryCode
            }

        });

        //const country = await Country.findOne({ where: { CountryCode: CountryCode } });

        if (country) {
            console.log(country);

            const phone = country + ' ' + req.body.phone;

            const newUser = await User.create({ firstName, lastName, username, email, password, phone });

            res.status(201).json(newUser);
        } else {
            res.status(400).json({ error: 'Code de téléphone correspondant non trouvé' });
=======
        const { firstName, lastName, username, CountryCode, email, password, phone } = req.body;
        //validation
        if (!firstName || !lastName || !username || !CountryCode || !email || !password || !phone) {
            return res.status(400).json({ error: "Missing required fields" });
>>>>>>> 2240e17ae5193e7b8ae00b9e5c6f52b588733b59
        }
        //recuperation du codephone de codecountry entrer
        const country = await Country.findOne({
            attributes: ['PhoneCode'],
            where: {
                CountryCode: CountryCode
            }
        });

        if (!country) {
            return res.status(400).json({ error: "Country not found" });
        }

        const completePhone = country.PhoneCode + ' ' + phone;
        //cryptage du mot de passe
        bcrypt.hash(password, 10, async(err, hash) => {
            if (err) {
                return res.status(500).json({ error: "Password hashing error" });
            }

<<<<<<< HEAD
            try {
                const newUser = await User.create({
                    firstName,
                    lastName,
                    username,
                    email,
                    password: hash,
                    phone: completePhone
                });
                return res.status(200).json({ message: 'Created successful', 'user': newUser });
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
=======
<<<<<<< HEAD


=======
        const newUser = await User.create({ firstName, lastName, username, email, password, phone: completePhone });
        res.status(201).json(newUser);
>>>>>>> 2240e17ae5193e7b8ae00b9e5c6f52b588733b59
>>>>>>> a30ee7bedabeffeb2477e4c2c966d90bd32b4aa7
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
        //recuperation
        const { CountryCode, password, phone } = req.body;

        // Récupération du code phone du code country entré
        const country = await Country.findOne({
            attributes: ['PhoneCode'],
            where: {
                CountryCode
            }
        });

        if (!country) {
            return res.status(400).json({ error: "Country not found" });
        }

        const completePhone = country.PhoneCode + ' ' + user.phone; // Utilisez user.phone pour récupérer le numéro de téléphone existant de l'utilisateur

        if (password && phone) {
            const hashedPassword = await bcrypt.hash(password, 10); // Hachez le nouveau mot de passe
            req.body.password = hashedPassword;
            req.body.phone = completePhone;
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
            return res.status(404).json({ error: 'User not found.' });
        }
        await user.destroy();
        return res.status(200).json({ message: 'Deletion successful', 'user': user });
    } catch (error) {
        return res.status(400).json({ error: 'Error while deleting the user.' });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};