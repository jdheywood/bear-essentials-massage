
'use strict';

var NodeCache = require('node-cache');
var myCache = new NodeCache();

module.exports = function (app) {

    app.get('/blog', function (req, res) {
        var meta = {
            title: 'Bear Essentials Massage - Blog',
            description: 'Bear Essentials Massage blog, the place to come for the latest news and offers from Bear Essentials Massage.',
            keywords: 'Blog, Bear Essentials Massage, News, Updates, Information, Offers, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure'
        };
        var content = {
            heading: 'Bear Essentials Blog',
            subtitle: 'Welcome to our blog',
            bodyText: 'Welcome to the Bear Essentials Massage blog, a place where you can keep up to date on all that is happening with our little company and learn about what we do, the treatments we offer and what makes us tick.',
            imageClass: 'blog',
            pageName: 'blog'
        };
      
        var cachedPosts = myCache.get('all-posts');
        if (cachedPosts === undefined) {
            var Post = require('../models/post');
            Post.find({}, function (error, posts) {
                myCache.set('all-posts', posts);
                res.render('blog-index', {
                    meta: meta,
                    content: content,
                    numberOfBlogPosts: posts.length,
                    posts: posts
                });
            });
        } else {
            res.render('blog-index', {
                meta: meta,
                content: content,
                numberOfBlogPosts: cachedPosts.length,
                posts: cachedPosts
            });
        }
    });

    app.get('/blog/:postUrl', function (req, res) {
        var meta = {
            title: 'Bear Essentials Massage - Blog',
            description: 'Bear Essentials Massage blog, the place to come for the latest news and offers from Bear Essentials Massage.',
            keywords: 'Blog, Bear Essentials Massage, News, Updates, Information, Offers, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure'
        };
        var content = {
            heading: 'Bear Essentials Blog',
            subtitle: 'Welcome to our blog',
            bodyText: 'Welcome to the Bear Essentials Massage blog, a place where you can keep up to date on all that is happening with our little company and learn about what we do, the treatments we offer and what makes us tick.',
            imageClass: 'blog',
            pageName: 'blog'
        };

        var cachedPost = myCache.get(req.params.postUrl);
        if (cachedPost === undefined) {
            var Post = require('../models/post');
            Post.findOne({'url': req.params.postUrl}, function (error, post) {
                myCache.set(req.params.postUrl, post);
                res.render('blog-post', {
                    meta: meta,
                    content: content,
                    post: post
                });
            });
        } else {
            res.render('blog-post', {
                meta: meta,
                content: content,
                post: cachedPost
            });
        }
    });

};