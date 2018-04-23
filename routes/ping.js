const controller = require('../controllers/ping');

module.exports = async (server) => {
    server.route({
        method: 'GET',
        path: '/ping',
        handler: controller.ping
    });
};
