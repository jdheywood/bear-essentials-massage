
'use strict';

module.exports = function (app) {

    app.get('/sitemap', function (req, res) {
        res.render('sitemap');
    });

    app.get('/', function (req, res) {
        res.render('home', {
            title: 'Bear Essentials Massage',
            heading: 'Bear Essentials Massage',
            subtitle: 'Here to help you recover, relax and rejuvenate.',
            bodyText: 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic treatments to aid relaxation, tension and stress release.',
            ctaText: 'Price List',
            ctaLink: '/price-list',
            imageClass: 'home',
            pageName: 'home',
            keywords: 'Home, Bear Essentials Massage, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure',
            description: 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic treatments to aid relaxation, tension and stress release.'
        });
    });
    app.get('/home', function (req, res) {
        res.render('home', {
            title: 'Bear Essentials Massage',
            heading: 'Bear Essentials Massage',
            subtitle: 'Here to help you recover, relax and rejuvenate.',
            bodyText: 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic to aid relaxation, tension and stress release.',
            ctaText: 'Price List',
            ctaLink: '/price-list',
            imageClass: 'home',
            pageName: 'home',
            keywords: 'Home, Bear Essentials Massage, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure',
            description: 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic treatments to aid relaxation, tension and stress release.'
        });
    });
    
    app.get('/price-list', function (req, res) {
        res.render('prices', {
            title: 'Bear Essentials Massage - Price List',
            heading: 'Price List',
            subtitle: 'View our full price list here.',
            bodyText: 'We have a wide range of therapies and sessions available, for enquiries, bookings and tailored sessions please contact us.',
            ctaText: 'Book Now',
            ctaLink: 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry',
            imageClass: 'prices',
            pageName: 'prices',
            keywords: 'Prices, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure',
            description: 'View our prices here, prices vary depending on the length of session and type of therapy. Corporate rates are available for some treatments.'
        });
    });

    app.get('/contact', function (req, res) {
        res.render('contact', {
            title: 'Bear Essentials Massage - Contact Us',
            heading: 'Contact Us',
            subtitle: 'Contact us for bookings and enquiries.',
            bodyText: 'Drop us a line and we will help you with any queries you may have. We will help to identify the the best and most suitable treatment for you and book your appointment.',
            ctaText: 'Book now',
            ctaLink: 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry',
            imageClass: 'contact',
            pageName: 'contact',
            keywords: 'Contact, Bear Essentials Massage, Email, Phone, Facebook, Twitter, Therapies, Bookings, Questions, Enquiries, Prices, Availability, Appointments, Suitability',
            description: 'We have a wide range of therapies and sessions available, get in touch and we will help to identify the the best and most suitable treatment for you and book your appointment.'
        });
    });

    app.get('/about', function (req, res) {
        res.render('about', {
            title: 'Bear Essentials Massage - About Us',
            heading: 'About Us',
            subtitle: 'Our story.',
            bodyText: 'Lipsum',
            ctaText: 'Price List',
            ctaLink: '/price-list',
            imageClass: 'about',
            pageName: 'about',
            keywords: 'About, Bear Essentials Massage, Brighton, Hove, Patricia Heywood, Certified, Therapist, Wellbeing, State of Mind, Professional, Personal, Relaxing, Helpful, Health, Mind, Body, Soul',
            description: 'Owned by Patricia Heywood a certified massage therapist, Bear Essentials Massage was established to help people to take time out from their everyday rituals and use that time to consider their wellbeing and state of mind.'
        });
    });

    app.get('/therapies', function (req, res) {
        res.render('therapies', {
            title: 'Bear Essentials Massage - Therapies',
            heading: 'Therapies',
            subtitle: 'Find out more about the therapies we offer.',
            bodyText: 'We have a wide range of therapies available, follow the links below to read more about the therapies we offer and find the ideal treatment for you.',
            ctaText: 'Book now',
            ctaLink: 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry',
            imageClass: 'therapies',
            pageName: 'therapies',
            keywords: 'Therapies, Bear Essentials Massage, Sports Massage, Sports Taping, Pregnancy Massage, Hot Stones Massage, Seated Acupressure, Information, Links, Summary',
            description: 'We have several different therapies to offer, read more about our therapies by following the links on this page.'
        });
    });

};