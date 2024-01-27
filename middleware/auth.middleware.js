const jwt = require('jsonwebtoken');

const chkToken = async (req, res, next) => {
    try {
        const headers = req.headers;
        if (headers.authorization && headers.authorization.split(' ')[0] === 'Bearer') {
            const token = headers.authorization.split(' ')[1];
            if (jwt.verify(token, process.env.JWT_SIGNATURE)) {
                next();
            }

        } else {
            res.status(401).json({
                msg: 'No hay token Bearer'
            });
        }
    } catch (error) {
        res.status(401).json({
            msg: error.message
        });
    }
};

module.exports = chkToken;