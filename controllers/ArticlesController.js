const slugify = require('slugify');

const Article = require('../models/Article');
const Category = require('../models/Category');

const ArticlesController = {
    index: async (req, res) => {
        const articles = await Article.findAll({
            include: [{
                model: Category
            }]
        });
        res.render('articles/index', { articles, user: req.session.user });
    },
    new: async (req, res) => {
        const categories = await Category.findAll();
        res.render('articles/new', { categories, user: req.session.user });
    },
    save: async (req, res) => {
        const { title, body, category } = req.body;
        if (title && body && category) {
            await Article.create({
                title,
                body,
                slug: slugify(title.toLowerCase()),
                categoryId: category
            })
            res.redirect('/admin/articles')
        } else {
            return
        }
    },
    show: async (req, res) => {
        const { id } = req.params;
        const categories = await Category.findAll();
        const article = await Article.findOne({ 
            where: { id },
            include: [{
                model: Category
            }]
        });
        res.render('articles/update', { article, categories, user: req.session.user });
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { title, body, category } = req.body;
        await Article.update({
            title,
            body,
            slug: slugify(title.toLowerCase()),
            categoryId: category
        }, {
            where: { id }
        })

        res.redirect('/admin/articles');

    },
    delete: async (req, res) => {
        const { id } = req.params;
        await Article.destroy({
            where: { id }
        })

        res.redirect('/admin/articles');
    }
}

module.exports = ArticlesController;