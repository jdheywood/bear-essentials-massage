
'use strict';

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('cover', {
            'title': 'Bear Essentials Massage',
            'heading': 'Bear Essentials Massage',
            'subtitle': 'Here to help you recover, relax and rejuvenate.',
            'bodyText': 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic to aid relaxation, tension and stress release.',
            'ctaText': 'View Prices',
            'ctaLink': '/price-list',
            'imageClass': 'home',
            'pageName': 'home'
        });
    });
    app.get('/home', function (req, res) {
        res.render('cover', {
            'title': 'Bear Essentials Massage',
            'heading': 'Bear Essentials Massage',
            'subtitle': 'Here to help you recover, relax and rejuvenate.',
            'bodyText': 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic to aid relaxation, tension and stress release.',
            'ctaText': 'View Prices',
            'ctaLink': '/price-list',
            'imageClass': 'home',
            'pageName': 'home'
        });
    });
    
    app.get('/price-list', function (req, res) {
        res.render('cover', {
            'title': 'Bear Essentials Massage - Price List',
            'heading': 'Price List',
            'subtitle': 'Lorem ipsum dolor sit amet',
            'bodyText': 'lipsum',
            'ctaText': 'lipsum',
            'ctaLink': '/',
            'imageClass': 'prices',
            'pageName': 'prices'
        });
    });

    app.get('/contact', function (req, res) {
        res.render('cover', {
            'title': 'Bear Essentials Massage - Contact',
            'heading': 'Contact',
            'subtitle': 'Lorem ipsum dolor sit amet',
            'bodyText': 'lipsum',
            'ctaText': 'lipsum',
            'ctaLink': '/',
            'imageClass': 'contact',
            'pageName': 'contact'
        });
    });

    app.get('/examples', function (req, res) {
        res.render('examples', {});
    });

    app.get('/sample', function (req, res) {
        res.render('sample', {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/carousel'
        });
    });

    app.get('/template/:selectedTemplate', function (req, res) {
        res.render('bootstrap3-templates/' + req.params.selectedTemplate, {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/' + req.params.selectedTemplate
        });
    });
};