
'use strict';

var NodeCache = require('node-cache');
var myCache = new NodeCache();

module.exports = function (app) {
    
    app.get('/sitemap', function (req, res) {
        res.set('Content-Type', 'text/xml');

        var cachedPosts = myCache.get('all-posts');
        if (cachedPosts === undefined) {
            var Post = require('../models/post');
            Post.find({}).sort({created: 'descending'}).exec(function (error, posts) {
                myCache.set('all-posts', posts);
                res.render('sitemap/sitemap', {
                    posts: posts
                });
            });
        } else {
            res.render('sitemap/sitemap', {
                posts: cachedPosts
            });
        }

    });
    
    app.get('/sitemap-static', function (req, res) {
        res.set('Content-Type', 'text/xml');
        res.render('sitemap/sitemap-static');
    });

};