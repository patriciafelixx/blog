const Category = require('../models/Category');
const slugify = require('slugify');

const CategoriesController = {
    index: async (req, res) => {
        const categories = await Category.findAll();
        res.render('categories/index', { categories });
    },
    new: (req, res) => {
        res.render('categories/new');
    },
    save: async (req, res) => {
        const { title } = req.body;
        if (title) {
            await Category.create({
                title,
                slug: slugify(title.toLowerCase())
            })
            res.redirect('/admin/categories')
        } else {
            res.redirect('/admin/categories/new');
        }
    },
    show: async (req, res) => {
        const { id } = req.params;
        const category =  await Category.findByPk(id);

        res.render('categories/update', { category });
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { title } = req.body;

        await Category.update({
            title,
            slug: slugify(title.toLowerCase())
        }, {
            where: { id }
        })

        res.redirect('/admin/categories');
    },
    delete: async (req, res) => {
        const { id } = req.params;
        await Category.destroy({
            where: { id }
        })
        res.redirect('/admin/categories');
    }
}

module.exports = CategoriesController;