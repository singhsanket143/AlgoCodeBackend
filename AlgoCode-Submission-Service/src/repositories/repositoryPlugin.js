const SubmissionRepository = require('./submissionRepository');
const fastifyPlugin = require('fastify-plugin');
async function repopsitoryPlugin(fastify, options) {
    fastify.decorate('submissionRepository', new SubmissionRepository());
}

module.exports = fastifyPlugin(repopsitoryPlugin);