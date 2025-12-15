const { Signup, Login } = require('../Controllers/AuthController');
const { SignupValidation, LoginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/signup', SignupValidation, Signup );

router.post('/login', LoginValidation, Login );

module.exports = router
