const Hapi = require('hapi');

const path = require('path');
const loader = require('../utils/loader');

module.exports = () => {
    const server = Hapi.server({ port: 3000, host: 'localhost' });

    const models = [];

    loader('../models').forEach((modelPath) => {
        models.push(require(path.resolve(__dirname, '../models', modelPath)))
    });

    loader('../routes').forEach((routePath) => {
        require(path.resolve(__dirname, '../routes', routePath))(server);
    });

    return server;
}
