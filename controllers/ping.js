const ping = async (request, h) => {
    return h.response('pong');
}

module.exports = {
    ping
}
