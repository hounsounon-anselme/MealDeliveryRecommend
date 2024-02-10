const fs = require('fs');
const csv = require('csv-parser');
const { promisify } = require('util');

module.exports = {
    async up(queryInterface, Sequelize) {
        const filePath = 'public/uploads/data_countries.csv';

        const results = [];

        const readFileAsync = promisify(fs.readFile);
        const readStream = fs.createReadStream(filePath);

        await new Promise((resolve, reject) => {
            readStream
                .pipe(csv())
                .on('data', (data) => {
                    results.push({
                        CountryName: data['Nom du pays'],
                        CountryCode: data['Code de pays'],
                        PhoneCode: data['Code de téléphone'],
                        FlagURL: data['Nom du fichier PNG'],
                    });
                })
                .on('end', () => {
                    resolve();
                })
                .on('error', (error) => {
                    reject(error);
                });
        });

        await queryInterface.bulkInsert('countries', results, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('countries', null, {});
    }
};