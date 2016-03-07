
'use strict';

module.exports = function (app) {

    var sports_massage = { 
        items: [
            { 'id': 0, 'src': '/img/sports-2.jpg', 'alt': 'sports 2', 'heading': 'Lorem ipsum', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'linkUrl': '#', 'linkText': 'Call to action' },
            { 'id': 1, 'src': '/img/sports-4.jpg', 'alt': 'sports 4', 'heading': '', 'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'linkUrl': '#', 'linkText': 'Do something' },
            { 'id': 2, 'src': '/img/sports-5.jpg', 'alt': 'sports 5', 'heading': '', 'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', 'linkUrl': '#', 'linkText': 'Or not wevs' }
        ],
        title: 'Bear Essentials Massage - Sports Massage',
        'heading': 'Sports Massage',
        'subtitle': 'To aid recovery from injury',
        pageName: 'sports_massage'
    };

    var sports_taping = {
        items: [
            { 'id': 0, 'src': '/img/taping-1.jpg', 'alt': 'taping 1', 'heading': 'Lorem ipsum', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'linkUrl': '#', 'linkText': 'Call to action' },
            { 'id': 1, 'src': '/img/taping-2.jpg', 'alt': 'taping 2', 'heading': '', 'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'linkUrl': '#', 'linkText': 'Do something' }
        ],
        title: 'Bear Essentials Massage - Sports Taping',
        'heading': 'Sports Taping',
        'subtitle': 'For support during recovery',
        pageName: 'sports_taping'
    };

    var hot_stones_massage = {
        items: [
            { 'id': 0, 'src': '/img/stones-3.jpg', 'alt': 'stones 3', 'heading': 'Lorem ipsum', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'linkUrl': '#', 'linkText': 'Call to action' },
            { 'id': 1, 'src': '/img/stones-1.jpg', 'alt': 'stones 1', 'heading': '', 'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'linkUrl': '#', 'linkText': 'Do something' },
            { 'id': 2, 'src': '/img/stones-5.jpg', 'alt': 'stones 5', 'heading': '', 'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', 'linkUrl': '#', 'linkText': 'Or not wevs' }
        ],
        title: 'Bear Essentials Massage - Hot Stones Massage',
        'heading': 'Hot Stones Massage',
        'subtitle': 'Healing and effective',
        pageName: 'hot_stones_massage'
    };

    var pregnancy_massage = {
        items: [
            { 'id': 0, 'src': '/img/pregnancy-4.jpg', 'alt': 'pregnancy 4', 'heading': 'Lorem ipsum', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'linkUrl': '#', 'linkText': 'Call to action' },
            { 'id': 1, 'src': '/img/pregnancy-1.jpg', 'alt': 'pregnancy 1', 'heading': '', 'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'linkUrl': '#', 'linkText': 'Do something' },
            { 'id': 2, 'src': '/img/pregnancy-5.jpg', 'alt': 'pregnancy 5', 'heading': '', 'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', 'linkUrl': '#', 'linkText': 'Or not wevs' }
        ],
        title: 'Bear Essentials Massage - Pregnancy Massage',
        'heading': 'Pregnancy Massage',
        'subtitle': 'Deep relaxation and wellbeing',
        pageName: 'pregnancy_massage'
    };

    var seated_acupressure = {
        items: [
            { 'id': 0, 'src': '/img/seated-1.jpg', 'alt': 'seated 1', 'heading': 'Lorem ipsum', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'linkUrl': '#', 'linkText': 'Call to action' },
            { 'id': 1, 'src': '/img/seated-6.jpg', 'alt': 'seated 6', 'heading': '', 'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'linkUrl': '#', 'linkText': 'Do something' },
            { 'id': 2, 'src': '/img/seated-3.jpg', 'alt': 'seated 3', 'heading': '', 'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', 'linkUrl': '#', 'linkText': 'Or not wevs' }
        ],
        title: 'Bear Essentials Massage - Seated Acupressure',
        'heading': 'Seated Acupressure',
        'subtitle': 'Improve the flow of energy',
        pageName: 'seated_acupressure'
    };

    var spa = {
        items: [
            { 'id': 0, 'src': '/img/spa-1.jpg', 'alt': 'spa 1', 'heading': 'Lorem ipsum', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'linkUrl': '#', 'linkText': 'Call to action' },
            { 'id': 1, 'src': '/img/spa-2.jpg', 'alt': 'spa 2', 'heading': '', 'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'linkUrl': '#', 'linkText': 'Do something' },
            { 'id': 2, 'src': '/img/spa-4.jpg', 'alt': 'spa 4', 'heading': '', 'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', 'linkUrl': '#', 'linkText': 'Or not wevs' }
        ],
        title: 'Bear Essentials Massage - Spa',
        'heading': 'Spa',
        'subtitle': 'Here to help you recover, relax and rejuvenate.',
        pageName: 'spa'
    };

    app.get('/therapies/:selectedTherapy', function(req, res) {
        var items = {}
        if (req.params.selectedTherapy == 'sports-massage')
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': sports_massage.items,
                'title': sports_massage.title,
                'pageName': sports_massage.pageName,
                'heading': sports_massage.heading,
                'subtitle': sports_massage.subtitle
            });
        else if (req.params.selectedTherapy == 'sports-taping')
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': sports_taping.items,
                'title': sports_taping.title,
                'pageName': sports_taping.pageName,
                'heading': sports_taping.heading,
                'subtitle': sports_taping.subtitle
            });
        else if (req.params.selectedTherapy == 'hot-stones-massage')
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': hot_stones_massage.items,
                'title': hot_stones_massage.title,
                'pageName': hot_stones_massage.pageName,
                'heading': hot_stones_massage.heading,
                'subtitle': hot_stones_massage.subtitle
            });
        else if (req.params.selectedTherapy == 'pregnancy-massage')
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': pregnancy_massage.items,
                'title': pregnancy_massage.title,
                'pageName': pregnancy_massage.pageName,
                'heading': pregnancy_massage.heading,
                'subtitle': pregnancy_massage.subtitle
            });
        else if (req.params.selectedTherapy == 'seated-acupressure')
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': seated_acupressure.items,
                'title': seated_acupressure.title,
                'pageName': seated_acupressure.pageName,
                'heading': seated_acupressure.heading,
                'subtitle': seated_acupressure.subtitle
            });
        else
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': spa.items,
                'title': spa.title,
                'pageName': spa.pageName,
                'heading': spa.heading,
                'subtitle': spa.subtitle
            });
    });
};