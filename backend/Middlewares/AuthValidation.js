const joi = require('joi');

const SignupValidation = (req, res, next) => {
    const Schema = joi.object({
        firstname: joi.string().min(4).max(20).required(),
        lastname: joi.string().min(4).max(20).required(),
        email: joi.string().email().required(),
        address: joi.string().required(),
        password: joi.string().min(4).max(20).required(),
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Validate Email & Password more than 4 Char', error })
    };

    next();
};

const LoginValidation = (req, res, next) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(20).required(),
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Validate Email & Password more than 4 Char', error })
    };

    next();
};

module.exports = { SignupValidation, LoginValidation }