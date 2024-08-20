const signupRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

signupRouter.post('/', async (req, res, next) => {
    const { username, password, email } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user =  new User({
        username,
        passwordHash,
        email
    });

    try {
        await user.save();
        res.status(200).json(user);
    } catch(error) {
        next(error);
    }
});

module.exports = signupRouter;