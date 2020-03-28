const jwt = require('jsonwebtoken');
const {User} = require('./../database.js');
const AUTH_SECRET = 'SECRET';
const UnauthorizedException = require('./../exceptions/UnauthorizedException');

module.exports = async (req, res, next) => {
    try {

        const payload = jwt.verify(req.header('Access-Token'), AUTH_SECRET);

        if(payload){
            const user = await User.findByPk(payload.id);

            if(user){
                req.user = user;
            }
        }

        next();
    } catch (error){
        return next(new UnauthorizedException(error));
    }
};