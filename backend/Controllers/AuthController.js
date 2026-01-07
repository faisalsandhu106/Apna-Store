const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthModel = require('../Models/AuthSchema');

const Signup = async (req, res) => {
    try {
        const { firstname, lastname, email, address, password } = req.body;
        const user = await AuthModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists, Please Login', success: false })
        };

        const authModel = new AuthModel({ firstname, lastname, email, address, password });
        authModel.password = await bcrypt.hash(password, 10);
        const jwtToken = jwt.sign(
            { email: authModel.email, _id: authModel._id },
            process.env.JWT_TOKEN,
            { expiresIn: '24h' },
        );

        res.status(200).json({
            message: 'User Registered Successfully',
            success: true,
            jwtToken,
            email,
            firstname: authModel.firstname,
            lastname: authModel.lastname,
            email: authModel.email,
            address: authModel.address
        });

        await authModel.save();

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
};

const Login = async (req, res) => {
    try {
        const error = 'Auth failed email or password incorrect';
        const { email, password } = req.body;
        const user = await AuthModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: error, success: false })
        };

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(403).json({ message: error, success: false })
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_TOKEN,
            { expiresIn: '24h' },
        );

        res.status(200).json({
            message: 'User Login Successfully',
            success: true,
            jwtToken,
            email,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            address: user.address
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
};

module.exports = { Signup, Login }