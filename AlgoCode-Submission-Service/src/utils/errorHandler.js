const BaseError = require("../errors/base.error");
const { StatusCodes } = require('http-status-codes');

function errorHandler(error, request, reply) {
    if (error instanceof BaseError) {
        reply.status(error.statusCode).send({
            success: false,
            message: error.message,
            error: error.details,
            data: {} // Because this is an exception so no data is going to be provided.
        });
    } else {
        reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "something went wrong!",
            error: error.message || error, // Ensure `error.message` is used if available
            data: {} // Because this is an exception so no data is going to be provided.
        });
    }
}

module.exports = errorHandler;
