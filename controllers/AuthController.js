const jwt = require('jsonwebtoken');
const {User} = require('./../database.js');
const AUTH_SECRET = 'SECRET';
const BadRequestException = require('./../exceptions/BadRequestException');
const ForbiddenException = require('./../exceptions/ForbiddenException');
const InternalErrorException = require('./../exceptions/InternalErrorException');

module.exports = {
    async login (req, res, next) {
        // Получили данные с request
        const { email, password } = req.body;

        try {
            const errors = {};

            if (!email) {
                errors.login = {
                    message: 'Oops! Login invalid',
                };
            }
            if (!password) {
                errors.password = {
                    message: 'Oops! Password invalid',
                };
            }
            if (Object.keys(errors).length) {
                return next(new BadRequestException(errors));
            }

            const user = await User.findOne({
                where: {
                    email,
                },
            });

            if (!user) {
                return next(new BadRequestException({
                    email: {
                        message: 'Oops! User not found',
                    },
                }));
            }

            const match = password === user.password;

            if (match) {
                // Пароль подошел. Генерируем токен
                const token = jwt.sign(
                    {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                    },
                    AUTH_SECRET,
                    {
                        expiresIn: '1d',
                    },
                );

                // Отправляем токен
                return res.status(200).send({
                    token,
                });
            }

            // Пароль не валидный, отправляем ошибку
            return next(new ForbiddenException());
        } catch (error) {
            return next(new InternalErrorException());
        }
    }
};