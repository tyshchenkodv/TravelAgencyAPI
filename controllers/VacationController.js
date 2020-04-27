const { Vacation } = require('./../database.js');
const { Service } = require('./../database.js');
const { Hotel } = require('./../database.js');
const { Ticket } = require('./../database.js');
const NotFoundException = require('./../exceptions/NotFoundException');
const BadRequestException = require('./../exceptions/BadRequestException');
const UnauthorizedException = require('./../exceptions/UnauthorizedException');
const InternalErrorException = require('./../exceptions/InternalErrorException');

module.exports = {
    listWithServices: async (req, res, next) => {
        try {
            const data = await Vacation.findAll({
                include: [
                    'user',
                    {
                        as: 'services',
                        model: Service,
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });
            return res.status(200).send({
                data,
            });
        } catch (error) {
            return next(new InternalErrorException(error));
        }
    },
    listWithHotels: async (req, res, next) => {
        try {
            console.log(1);
            const data = await Vacation.findAll({
                include: [
                    'user',
                    {
                        as: 'hotels',
                        model: Hotel,
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });
            console.log(2);
            return res.status(200).send({
                data,
            });
        } catch (error) {
            return next(new InternalErrorException(error));
        }
    },
    listWithTickets: async (req, res, next) => {
        try {
            const data = await Vacation.findAll({
                include: [
                    'user',
                    {
                        as: 'tickets',
                        model: Ticket,
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });

            return res.status(200).send({
                data,
            });
        } catch (error) {
            return next(new InternalErrorException(error));
        }
    },
    list: async (req, res, next) => {
        try {
            const data = await Vacation.findAll({
                include: [
                    'user'
                ]
            });

            return res.status(200).send({
                data,
            });
        } catch (error) {
            return next(new InternalErrorException(error));
        }
    },
    item: async (req, res, next) => {
        const { id } = req.params;

        const item = await Vacation.findByPk(id);

        if (!item) {
            return next(new NotFoundException());
        }

        return res.status(200).send({
            item,
        });
    },
    update: async (req, res, next) => {
        if (!req.user) {
            return next(new UnauthorizedException());
        }

        const { id } = req.params;
        const data = req.body;

        const item = await Vacation.findByPk(id);

        if (!item) {
            return next(new NotFoundException());
        }

        try {
            await item.update(data);
        } catch (error) {
            return next(new BadRequestException(error));

        }

        return res.status(204).send();
    },
    delete: async (req, res, next) => {
        if (!req.user) {
            return next(new UnauthorizedException());
        }

        const { id } = req.params;
        const item = await Vacation.findByPk(id);

        if (!item) {
            return next(new NotFoundException());
        }

        await item.destroy();

        return res.status(204).send();
    },
    create: async (req, res, next) => {
        if (!req.user) {
            return next(new UnauthorizedException());
        }

        try {
            const data = req.body;
            await Vacation.create(data);

        } catch (error) {
            return next(new BadRequestException(error));
        }

        return res.status(201).send();
    },
};
