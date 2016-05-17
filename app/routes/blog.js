
'use strict';

module.exports = function (app) {

    var Promise = require('promise');

    app.get('/blog', function (req, res) {
        var db = req.db;
        var collection = db.get('posts');
        
        /* jshint -W098 */
        /* jshint unused:false */
        var promise = new Promise(function (resolve, reject) {
            collection.count({}, function (err, count) {
                resolve(count);
            });
        });
        /* jshint +W098 */
        
        promise.then(function (count) {
            res.render('blog', {
                title: 'Bear Essentials Massage - Blog',
                heading: 'Blog',
                subtitle: 'Lorem ipsum dolor sit amet',
                bodyText: 'Lorem ipsum dolor sit amet',
                ctaText: 'Therapy',
                ctaLink: '/therapies',
                imageClass: 'blog',
                pageName: 'blog',
                keywords: 'Blog, Bear Essentials Massage, News, Updates, Information, Offers, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure',
                description: 'Bear Essentials Massage blog, the place to come for the latest news and offers from Bear Essentials Massage.',
                numberOfBlogPosts: count
            });
        });
    });

};