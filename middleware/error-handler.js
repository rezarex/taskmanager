const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: 'Might be you, might be me, but someone did something wrong' })
}

module.exports = errorHandlerMiddleware;