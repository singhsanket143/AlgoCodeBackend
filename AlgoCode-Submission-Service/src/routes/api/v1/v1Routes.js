async function v1Plugin(fastify, options) {
    fastify.register(require('./submissionRoutes'), {prefix: '/submissions'});
}

module.exports = v1Plugin