
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
            'bodyText': 'We have a wide range of therapies and sessions available, for enquiries, bookings and tailored sessions please contact us.',
            'ctaText': 'Book Now',
            'ctaLink': 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry',
            'imageClass': 'prices',
            'pageName': 'prices'
        });
    });

    app.get('/contact', function (req, res) {
        res.render('contact', {
            'title': 'Bear Essentials Massage - Contact Us',
            'heading': 'Contact Us',
            'subtitle': 'Contact us for bookings and enquiries.',
            'bodyText': 'Drop us a line and we will help you with any queries you may have. We will help to identify the the best and most suitable treatment for you and book your appointment.',
            'ctaText': 'Book now',
            'ctaLink': 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry',
            'imageClass': 'contact',
            'pageName': 'contact'
        });
    });

    app.get('/about', function (req, res) {
        res.render('about', {
            'title': 'Bear Essentials Massage - About Us',
            'heading': 'About Us',
            'subtitle': 'Our story.',
            'bodyText': 'Lipsum',
            'ctaText': 'Price List',
            'ctaLink': '/price-list',
            'imageClass': 'about',
            'pageName': 'about'
        });
    });

};