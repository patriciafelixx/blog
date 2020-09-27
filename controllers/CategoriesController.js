const Category = require('../models/Category');
const slugify = require('slugify');

const CategoriesController = {
    index: (req, res) => {
        res.send('Rota de categorias');
    },
    new: (req, res) => {
        res.render('categories/new');
    },
    save: (req, res) => {
        const { title } = req.body;
        if (title) {
            Category.create({
                title,
                slug: slugify(title.toLowerCase())
            }).then(
                res.redirect('/')
            )
        } else {
            res.redirect('/admin/categories/new');
        }
    }
}

module.exports = CategoriesController;