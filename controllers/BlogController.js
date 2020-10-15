const Article = require('../models/Article');
const Category = require('../models/Category');

const BlogController = {
    index: async (req, res) => {
        let { page = 1 } = req.params;
        page = parseInt(page);
        let limit = 3;
        let offset = limit * (page - 1);

        const articles = await Article.findAndCountAll({
            limit,
            offset,
            order: [
                ['id', 'DESC']
            ],
            include: {
                model: Category
            }
        })

        const next = offset + (limit - 1) <= articles.count; // true or false

        const categories = await Category.findAll();

        res.render('index', { articles: articles.rows, categories, page, next });

    },
    indexFilter: async (req, res) => {
        const { slug } = req.params;
        
        const category = await Category.findOne({
            where: { slug }
        })

        const articles = await Article.findAll({
            where: {
                categoryId: category.id
            },
            order: [['id', 'DESC']]
        })
        
        const categories = await Category.findAll();
        
        res.render('indexFilter', { articles, category, categories });
    },
    slug: async (req, res) => {
        const { slug } = req.params;
        const article = await Article.findOne({
            where: { slug },
            include: [{
                model: Category
            }]
        })

        if (article) {
            res.render('articles/article', { article });
        } else {
            res.redirect('/');
        }
    }
}

module.exports = BlogController;