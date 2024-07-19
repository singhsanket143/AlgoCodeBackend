const { createSubmission } = require("../../../controllers/submissionController");

async function submissionRoutes(fastify, options) {
    fastify.post('/', createSubmission);
}

module.exports = submissionRoutes;