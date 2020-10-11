const Article = require('../models/Article');
const Category = require('../models/Category');

const BlogController = {
    index: async (req, res) => {
        const articles = await Article.findAll({
            include: [{
                model: Category
            }],
            order: [
                ['id', 'DESC']
            ]
        });
        const categories = await Category.findAll();

        res.render('index', { articles, categories });
    },
    indexFilter: async (req,res) => {
        const { slug } = req.params;
        
        const category = await Category.findOne({
            where: { slug },
            include: [{
                model: Article
            }]
        })
        
        const categories = await Category.findAll();
        
        res.render('indexFilter', { articles: category.articles, category, categories });
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