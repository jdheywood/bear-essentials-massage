
'use strict';

module.exports = function (app) {

    var metaHome = {
        title: 'Bear Essentials Massage',
        description: 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic treatments to aid relaxation, tension and stress release.',
        keywords: 'Home, Bear Essentials Massage, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure'
    };
    var contentHome = {
        heading: 'Bear Essentials Massage',
        subtitle: 'Here to help you recover, relax and rejuvenate.',
        bodyText: 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic treatments to aid relaxation, tension and stress release.',
        imageClass: 'home',
        pageName: 'home',
        ctaText: 'Price List',
        ctaLink: '/price-list'
    };

    app.get('/', function (req, res) {
        res.render('home', {
            meta: metaHome,
            content: contentHome
        });
    });
    app.get('/home', function (req, res) {
        res.render('home', {
            meta: metaHome,
            content: contentHome
        });
    });
    
    app.get('/price-list', function (req, res) {
        var meta = {
            title: 'Bear Essentials Massage - Price List',
            description: 'View our prices here, prices vary depending on the length of session and type of therapy. Corporate rates are available for some treatments.',
            keywords: 'Prices, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure'
        };
        var content = {
            heading: 'Price List',
            subtitle: 'View our full price list here.',
            bodyText: 'We have a wide range of therapies and sessions available, for enquiries, bookings and tailored sessions please contact us.',
            imageClass: 'prices',
            pageName: 'prices',
            ctaText: 'Booking Enquiry',
            ctaLink: 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry'
        };
        
        res.render('prices', {
            meta: meta,
            content: content
        });
    });

    app.get('/contact', function (req, res) {
        var meta = {
            title: 'Bear Essentials Massage - Contact Us',
            description: 'We have a wide range of therapies and sessions available, get in touch and we will help to identify the the best and most suitable treatment for you and book your appointment.',
            keywords: 'Contact, Bear Essentials Massage, Email, Phone, Facebook, Twitter, Therapies, Bookings, Questions, Enquiries, Prices, Availability, Appointments, Suitability'
        };
        var content = {
            heading: 'Contact Us',
            subtitle: 'Contact us for bookings and enquiries.',
            bodyText: 'Drop us a line and we will help you with any queries you may have. We will help to identify the the best and most suitable treatment for you and book your appointment.',
            imageClass: 'contact',
            pageName: 'contact',
            ctaText: 'Booking Enquiry',
            ctaLink: 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry',
        };
        
        res.render('contact', {
            meta: meta,
            content: content
        });
    });

    app.get('/about', function (req, res) {
        var meta = {
            title: 'Bear Essentials Massage - About Us',
            description: 'Owned by Patricia Heywood a certified massage therapist, Bear Essentials Massage was established to help people to take time out from their everyday rituals and use that time to consider their wellbeing and state of mind.',
            keywords: 'About, Bear Essentials Massage, Brighton, Hove, Patricia Heywood, Certified, Therapist, Wellbeing, State of Mind, Professional, Personal, Relaxing, Helpful, Health, Mind, Body, Soul'
        };
        var content = {
            heading: 'About Us',
            subtitle: 'Our story.',
            bodyText: '',
            imageClass: 'about',
            pageName: 'about',
            ctaText: 'Price List',
            ctaLink: '/price-list'
        };
        
        res.render('about', {
            meta: meta,
            content: content
        });
    });

};