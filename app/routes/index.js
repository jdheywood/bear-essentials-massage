
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
            'subtitle': 'View our full price list here.',
            'bodyText': 'We have a wide range of therapies and sessions available, for enquiries on block bookings and tailored sessions please contact me to discuss prices.',
            'ctaText': 'Book Now',
            'ctaLink': 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry',
            'imageClass': 'prices',
            'pageName': 'prices'
        });
    });

    app.get('/contact', function (req, res) {
        res.render('contact', {
            'title': 'Bear Essentials Massage - Contact',
            'heading': 'Contact',
            'subtitle': 'Contact me for bookings and enquiries.',
            'bodyText': 'Just drop me a line and I can help you with any queries you may have, help to identify the most suitable treatments for you and book an appointment',
            'ctaText': 'Book now',
            'ctaLink': 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry',
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