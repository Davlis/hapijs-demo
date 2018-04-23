const Hapi = require('hapi');

const path = require('path');
const loader = require('../utils/loader');

module.exports = () => {
    const server = Hapi.server({ port: 3000, host: 'localhost' });

    loader('../routes').forEach((routePath) => {
        require(path.resolve(__dirname, '../routes', routePath))(server);
    });

    return server;
}
