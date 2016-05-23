
'use strict';

module.exports = function (app) {

    app.get('/blog', function (req, res) {
        var Post = require('../models/post');
        Post.find({}, function (error, posts) {
            res.render('blog-index', {
                title: 'Bear Essentials Massage - Blog',
                heading: 'Bear Essentials Blog',
                subtitle: 'Welcome to our blog',
                bodyText: 'Welcome to the Bear Essentials Massage Blog, a place where you can keep up to date on all that is happening with our little company and learn all about what we do, the treatments we offer and what makes us tick.',
                imageClass: 'blog',
                pageName: 'blog',
                keywords: 'Blog, Bear Essentials Massage, News, Updates, Information, Offers, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure',
                description: 'Bear Essentials Massage blog, the place to come for the latest news and offers from Bear Essentials Massage.',
                numberOfBlogPosts: posts.length,
                posts: posts
            });
        });
    });

    app.get('/blog/:postUrl', function (req, res) {
        var Post = require('../models/post');
        Post.findOne({'url': req.params.postUrl}, function (error, post) {
            res.render('blog-post', {
                title: 'Bear Essentials Massage - Blog',
                url: post.url,
                heading: 'Bear Essentials Blog',
                imageClass: 'blog',
                subtitle: post.title,
                bodyText: post.body
            });
        });
    });

};