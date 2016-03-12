
'use strict';

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('home', {
            'title': 'Bear Essentials Massage',
            'heading': 'Bear Essentials Massage',
            'subtitle': 'Here to help you recover, relax and rejuvenate.',
            'bodyText': 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic treatments to aid relaxation, tension and stress release.',
            'ctaText': 'Price List',
            'ctaLink': '/price-list',
            'imageClass': 'home',
            'pageName': 'home'
        });
    });
    app.get('/home', function (req, res) {
        res.render('home', {
            'title': 'Bear Essentials Massage',
            'heading': 'Bear Essentials Massage',
            'subtitle': 'Here to help you recover, relax and rejuvenate.',
            'bodyText': 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic to aid relaxation, tension and stress release.',
            'ctaText': 'Price List',
            'ctaLink': '/price-list',
            'imageClass': 'home',
            'pageName': 'home'
        });
    });
    
    app.get('/price-list', function (req, res) {
        res.render('prices', {
            'title': 'Bear Essentials Massage - Price List',
            'heading': 'Price List',
            'subtitle': 'This is the subtitle, it should say something interesting',
            'bodyText': 'Check out our amazing prices for these awesome treatments and stuff, get involved!',
            'ctaText': 'Book Now',
            'ctaLink': 'mailto:patricia@bearessentialsmassage.co.uk',
            'imageClass': 'prices',
            'pageName': 'prices'
        });
    });

    app.get('/contact', function (req, res) {
        res.render('contact', {
            'title': 'Bear Essentials Massage - Contact',
            'heading': 'Contact',
            'subtitle': 'If you need to get in touch just drop me a line via...',
            'bodyText': 'Phone, email or facebook, its all gravy, get in touch and book an appointment now',
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