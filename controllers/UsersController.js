const User = require('../models/User');
const bcrypt = require('bcryptjs');

const UsersController = {
    index: async (req, res) => {
        const users = await User.findAll();
        res.render('users/index', { users, user: req.session.user });
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

        if (!user) {
            const user = await User.create({
                email,
                password: hash
            })

            req.session.user = {
                id: user.id,
                email: user.email
            }
            res.redirect('/admin/articles');

        } else {
            res.send('Usuário ja cadastrado!')
        }

    },
    login: async (req, res) => {
        res.render('users/login')
    },
    authenticate: async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email
            }
        })

        if (user) {
            const auth = bcrypt.compareSync(password, user.password);
            if (auth) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect('/admin/articles')
            } else {
                res.send('usuário ou senha incorreta');
            }
        } else {
            res.send('usuário ou senha incorreta');
        }

    }
}

module.exports = UsersController;