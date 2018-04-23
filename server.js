const Hapi = require('hapi');
const registerRoutes = require('./routes');

process.on('unhandledRejection', (err) => { console.log(err); });

(async() => {
    const server = Hapi.server({ port: 3000, host: 'localhost' });
    registerRoutes(server);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
})();
