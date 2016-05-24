
'use strict';

var NodeCache = require('node-cache');
var myCache = new NodeCache();
var Post = require('../models/post');
var Q = require('q');

function getTags() {
    var deferred = Q.defer();
    var cachedTags = myCache.get('tags');
    if (cachedTags === undefined) {
        Post.collection.distinct('tags', function (error, tags) {
            myCache.set('tags', tags);
            deferred.resolve(tags);
        });
    } else {
        deferred.resolve(cachedTags);
    }
    return deferred.promise;
}

function getPosts() {
    var deferred = Q.defer();
    var cachedPosts = myCache.get('all-posts');
    if (cachedPosts === undefined) {
        var Post = require('../models/post');
        Post.find({}).sort({created: 'descending'}).exec(function (error, posts) {
            myCache.set('all-posts', posts);
            deferred.resolve(posts);
        });
    } else {
        deferred.resolve(cachedPosts);
    }
    return deferred.promise;
}

function getPost(req) {
    var deferred = Q.defer();
    var cachedPost = myCache.get(req.params.postUrl);
    if (cachedPost === undefined) {
        var Post = require('../models/post');
        Post.findOne({'url': req.params.postUrl}, function (error, post) {
            myCache.set(req.params.postUrl, post);
            deferred.resolve(post);
        });
    } else {
        deferred.resolve(cachedPost);
    }
    return deferred.promise;
}

function getPostsByTag(tag) {
    console.log(tag);
    var deferred = Q.defer();
    var cachedPosts = myCache.get(tag);
    if (cachedPosts === undefined) {
        var Post = require('../models/post');
        Post.find({tags: {$in: [tag]}}).sort({created: 'descending'}).exec(function (error, posts) {
            console.log(posts);
            myCache.set(tag, posts);
            deferred.resolve(posts);
        });
    } else {
        console.log(cachedPosts);
        deferred.resolve(cachedPosts);
    }
    return deferred.promise;
}

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

        var promises = [];
        promises.push(getPosts());
        promises.push(getTags());

        Q.all(promises).then(function (promised) {
            res.render('blog/blog-index', {
                meta: meta,
                content: content,
                numberOfBlogPosts: promised[0].length,
                posts: promised[0],
                tags: promised[1]
            });
        });
    });

    app.get('/blog/:postUrl', function (req, res) {
        var meta = {
            title: 'Bear Essentials Massage - Blog',
            description: 'Bear Essentials Massage blog, the place to come for the latest news and offers from Bear Essentials Massage.',
            keywords: 'Blog, Bear Essentials Massage, News, Updates, Information, Offers, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure'
        };
        var content = {
            heading: 'Bear Essentials Blog',
            imageClass: 'blog',
            pageName: 'blog'
        };

        var promises = [];
        promises.push(getPost(req));
        promises.push(getTags());

        Q.all(promises).then(function (promised) {
            res.render('blog/blog-post', {
                meta: meta,
                content: content,
                post: promised[0],
                tags: promised[1]
            });
        });
    });

    app.get('/blog/tag/:tagValue', function (req, res) {
        var tagValue = req.params.tagValue;
        var meta = {
            title: 'Bear Essentials Massage - Blog',
            description: 'Bear Essentials Massage blog, the place to come for the latest news and offers from Bear Essentials Massage.',
            keywords: 'Blog, Bear Essentials Massage, News, Updates, Information, Offers, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure'
        };
        var content = {
            heading: 'Bear Essentials Blog',
            subtitle: 'Blog posts tagged with ' + tagValue,
            imageClass: 'blog',
            pageName: 'blog'
        };

        var promises = [];
        promises.push(getPostsByTag(tagValue));
        promises.push(getTags());

        Q.all(promises).then(function (promised) {
            res.render('blog/blog-tagged', {
                meta: meta,
                content: content,
                numberOfBlogPosts: promised[0].length,
                posts: promised[0],
                tags: promised[1]
            });
        });
    });

};
