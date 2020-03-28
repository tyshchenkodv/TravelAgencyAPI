const jwt = require('jsonwebtoken');
const AUTH_SECRET = 'SECRET';

module.exports = (req, res, next) => {
    try {

        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, AUTH_SECRET);
        const userId = decodedToken.id;

        if (req.body.id && req.body.id !== userId) {
            return res.status(400).send({
                message: 'Such user does not exist!',
            });
        } else {
            next();
        }

    } catch {
        res.status(401).json({
            message: 'Invalid token!'
        });
    }
};