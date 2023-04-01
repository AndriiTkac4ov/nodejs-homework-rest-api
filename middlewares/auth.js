const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const { AppError } = require('../utils');
const usersService = require('../service/usersService');

const auth = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    try {
        if (bearer !== "Bearer") {
            return next(new AppError(401, "Not authorized"));
        };

        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await usersService.findUserById(id);

        if (!user || !user.token) {
            return next(new AppError(401, "Not authorized"));
        };

        req.user = user;
        next();
    } catch (error) {
        if (error.message === "invalid signature") {
            error.status = 401;
        };

        next (error);
    };
}

module.exports = auth;