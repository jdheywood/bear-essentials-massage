
'use strict';

module.exports = function (app) {

    var sportsMassage = {
        items: [
            { 'id': 0, 'src': '/img/sports-2-desktop.jpg', 'alt': 'sports 2', 'heading': 'Sports Massage', 'text': 'Help maintain your body’s condition', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/sports-4.jpg', 'alt': 'sports 4', 'heading': 'Sports Massage', 'text': 'Prevent injuries and loss of mobility', 'linkUrl': '../../../contact', 'linkText': 'Contact me' },
            { 'id': 2, 'src': '/img/sports-5.jpg', 'alt': 'sports 5', 'heading': 'Sports Massage', 'text': 'Cure and restore injured soft tissues of the body', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        title: 'Bear Essentials Massage - Sports Massage',
        'heading': 'Sports Massage',
        'subtitle': 'To aid recovery from injury',
        pageName: 'sportsMassage'
    };

    var sportsTaping = {
        items: [
            { 'id': 0, 'src': '/img/taping-2.jpg', 'alt': 'taping 2', 'heading': 'Sports Taping', 'text': 'Reduction of pain by removing the pressure from the pain receptors', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/taping-3.jpg', 'alt': 'taping 3', 'heading': 'Sports Taping', 'text': 'Adjusts mis-alignments of joints to aid fascia and muscles function', 'linkUrl': '../../../contact', 'linkText': 'Contact me' },
            { 'id': 2, 'src': '/img/taping-4.jpg', 'alt': 'taping 4', 'heading': 'Sports Taping', 'text': 'Reconditions abnormal tension and strengthens the muscles', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        title: 'Bear Essentials Massage - Sports Taping',
        'heading': 'Sports Taping',
        'subtitle': 'For support during recovery',
        pageName: 'sportsTaping'
    };

    var hotStonesMassage = {
        items: [
            { 'id': 0, 'src': '/img/stones-3.jpg', 'alt': 'stones 3', 'heading': 'Hot Stones Massage', 'text': 'Cleanses the body, aids relaxation of the heart and soothes the mind', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/stones-7.jpg', 'alt': 'stones 7', 'heading': 'Hot Stones Massage', 'text': 'Combines the use of heat and massage strokes to provide a healing and effective experience', 'linkUrl': '../../../contact', 'linkText': 'Contact me' },
            { 'id': 2, 'src': '/img/stones-8.jpg', 'alt': 'stones 8', 'heading': 'Hot Stones Massage', 'text': 'The warmth and the gentle pressure of the stones on the body helps to promote a very relaxing experience', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        title: 'Bear Essentials Massage - Hot Stones Massage',
        'heading': 'Hot Stones Massage',
        'subtitle': 'Healing and relaxing',
        pageName: 'hotStonesMassage'
    };

    var pregnancyMassage = {
        items: [
            { 'id': 0, 'src': '/img/pregnancy-4.jpg', 'alt': 'pregnancy 4', 'heading': 'Pregnancy Massage', 'text': 'Provides deep relaxation along with emotional and physiological wellbeing for both mother and baby', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/pregnancy-1.jpg', 'alt': 'pregnancy 1', 'heading': 'Pregnancy Massage', 'text': 'Reduces back pain and general aches from pregnancy', 'linkUrl': '../../../contact', 'linkText': 'Contact me' },
            { 'id': 2, 'src': '/img/pregnancy-5.jpg', 'alt': 'pregnancy 5', 'heading': 'Pregnancy Massage', 'text': 'Reduce stress, blood pressure and fluid retention', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        title: 'Bear Essentials Massage - Pregnancy Massage',
        'heading': 'Pregnancy Massage',
        'subtitle': 'Deep relaxation',
        pageName: 'pregnancyMassage'
    };

    var seatedAcupressure = {
        items: [
            { 'id': 0, 'src': '/img/seated-1.jpg', 'alt': 'seated 1', 'heading': 'Seated Acupressure', 'text': 'Stimulates the acupressure points in the head, neck, shoulders, spine and lower back', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/seated-6.jpg', 'alt': 'seated 6', 'heading': 'Seated Acupressure', 'text': 'Balances and strengthens the body’s muscular, circulatory and nervous systems', 'linkUrl': '../../../contact', 'linkText': 'Contact me' },
            { 'id': 2, 'src': '/img/seated-3.jpg', 'alt': 'seated 3', 'heading': 'Seated Acupressure', 'text': 'Improves the flow of energy around the body', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        title: 'Bear Essentials Massage - Seated Acupressure',
        'heading': 'Seated Acupressure',
        'subtitle': 'Improves the flow of energy',
        pageName: 'seatedAcupressure'
    };

    var spa = {
        items: [
            { 'id': 0, 'src': '/img/spa-1.jpg', 'alt': 'spa 1', 'heading': 'Lorem ipsum', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/spa-2.jpg', 'alt': 'spa 2', 'heading': 'Lorem ipsum', 'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'linkUrl': '../../../contact', 'linkText': 'Contact me' },
            { 'id': 2, 'src': '/img/spa-4.jpg', 'alt': 'spa 4', 'heading': 'Lorem ipsum', 'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        title: 'Bear Essentials Massage - Spa',
        'heading': 'Spa',
        'subtitle': 'Here to help you recover, relax and rejuvenate.',
        pageName: 'spa'
    };

    app.get('/therapies/:selectedTherapy', function (req, res) {
        
        if (req.params.selectedTherapy === 'sports-massage') {
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': sportsMassage.items,
                'title': sportsMassage.title,
                'pageName': sportsMassage.pageName,
                'heading': sportsMassage.heading,
                'subtitle': sportsMassage.subtitle
            });
        }
        else if (req.params.selectedTherapy === 'sports-taping') {
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': sportsTaping.items,
                'title': sportsTaping.title,
                'pageName': sportsTaping.pageName,
                'heading': sportsTaping.heading,
                'subtitle': sportsTaping.subtitle
            });
        }
        else if (req.params.selectedTherapy === 'hot-stones-massage') {
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': hotStonesMassage.items,
                'title': hotStonesMassage.title,
                'pageName': hotStonesMassage.pageName,
                'heading': hotStonesMassage.heading,
                'subtitle': hotStonesMassage.subtitle
            });
        }
        else if (req.params.selectedTherapy === 'pregnancy-massage') {
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': pregnancyMassage.items,
                'title': pregnancyMassage.title,
                'pageName': pregnancyMassage.pageName,
                'heading': pregnancyMassage.heading,
                'subtitle': pregnancyMassage.subtitle
            });
        }
        else if (req.params.selectedTherapy === 'seated-acupressure') {
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': seatedAcupressure.items,
                'title': seatedAcupressure.title,
                'pageName': seatedAcupressure.pageName,
                'heading': seatedAcupressure.heading,
                'subtitle': seatedAcupressure.subtitle
            });
        }
        else {
            res.render('therapies/' + req.params.selectedTherapy, {
                'carouselItems': spa.items,
                'title': spa.title,
                'pageName': spa.pageName,
                'heading': spa.heading,
                'subtitle': spa.subtitle
            });
        }
    });
};