const logger = require("../config/logger.config");
const BaseError = require("../errors/base.error");
const { StatusCodes } = require('http-status-codes');
function errorHandler(err, req, res, next) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} // because this is an exception so no data is going tobe provided
        });
    }

    logger.error(`Something went wrong`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something went wrong !',
        error: err,
        data: {} // because this is an exception so no data is going tobe provided
    });
}

module.exports = errorHandler;