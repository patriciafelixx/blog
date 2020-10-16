const User = require('../models/User');
const bcrypt = require('bcryptjs');

const UsersController = {
    index: async (req, res) => {
        const users = await User.findAll();
        res.render('users/index', { users });
    },
    create: (req, res) => {
        res.render('users/create');
    },
    save: async (req, res) => {
        const { email, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = await User.findOne({
            where: {
                email
            }
        })

        if (user) {
            res.send('Usuário ja cadastrado!')
        } else {
            await User.create({
                email,
                password: hash
            })
            res.redirect('/');
        }

    },
}

module.exports = UsersController;