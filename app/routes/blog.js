
'use strict';

module.exports = function (app) {

    app.get('/blog', function (req, res) {
        var Post = require('../models/post');
        Post.count({}, function (error, count) {
            res.render('blog-index', {
                title: 'Bear Essentials Massage - Blog',
                heading: 'Blog',
                subtitle: 'Lorem ipsum dolor sit amet',
                bodyText: 'Lorem ipsum dolor sit amet',
                imageClass: 'blog',
                pageName: 'blog',
                keywords: 'Blog, Bear Essentials Massage, News, Updates, Information, Offers, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure',
                description: 'Bear Essentials Massage blog, the place to come for the latest news and offers from Bear Essentials Massage.',
                numberOfBlogPosts: count
            });
        });
    });

    app.get('/blog/:post_id', function (req, res) {
        var Post = require('../models/post');
        Post.findOne({'order': 1}, function (error, post) {
            res.render('blog-post', {
                title: 'Bear Essentials Massage - Blog',
                heading: 'Blog',
                imageClass: 'blog',
                subtitle: post.title,
                bodyText: post.body
            });
        });
    });

};