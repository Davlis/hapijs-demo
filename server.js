const server = require('./config/hapi')();

process.on('unhandledRejection', (err) => { console.log(err); });

(async() => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
})();
