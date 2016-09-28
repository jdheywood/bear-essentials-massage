
'use strict';

module.exports = function (app) {
    
    app.get('/therapies', function (req, res) {
        var meta = {
            title: 'Bear Essentials Massage - Therapies',
            description: 'We have several different therapies to offer, read more about our therapies by following the links on this page.',
            keywords: 'Therapies, Bear Essentials Massage, Sports Massage, Sports Taping, Pregnancy Massage, Hot Stones Massage, Seated Acupressure, Information, Links, Summary'
        };
        var content = {
            heading: 'Therapies',
            subtitle: 'Find out more about the therapies we offer.',
            bodyText: 'We have a wide range of therapies available, follow the links below to read more about the therapies we offer and find the ideal treatment for you.',
            imageClass: 'therapies',
            pageName: 'therapies',
            ctaText: 'Book now',
            ctaLink: 'mailto:patricia@bearessentialsmassage.co.uk?subject=Booking enquiry'
        };

        res.render('therapies/therapies', {
            meta: meta,
            content: content
        });
    });

    var sportsMassage = {
        items: [
            { 'id': 0, 'src': '/img/desktop-sports-2.jpg', 'alt': 'sports 2', 'heading': 'Sports Massage', 'text': 'Help maintain your body’s condition', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/desktop-sports-4.jpg', 'alt': 'sports 4', 'heading': 'Sports Massage', 'text': 'Prevent injuries and loss of mobility', 'linkUrl': '../../../contact', 'linkText': 'Contact us' },
            { 'id': 2, 'src': '/img/desktop-sports-5.jpg', 'alt': 'sports 5', 'heading': 'Sports Massage', 'text': 'Cure and restore injured soft tissues of the body', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        meta: {
            title: 'Bear Essentials Massage - Sports Massage',
            description: 'Sports massage is a physical treatment primarily used on the neuromusculoskeletal system. It can help maintain your body’s condition, prevent injuries and loss of mobility, cure and restore injured soft tissues of the body including the muscle, tendons, ligaments and fascia.',
            keywords: 'Sports Massage, Therapy, Treatment, Physical, Maintain, Condition, Prevent, Injury, Restore, Muscle, Tendon, Ligament, Fascia'
        },
        content: {
            heading: 'Sports Massage',
            subtitle: 'To aid recovery from injury',
            pageName: 'sportsMassage'
        }
    };

    var sportsTaping = {
        items: [
            { 'id': 0, 'src': '/img/desktop-taping-2.jpg', 'alt': 'taping 2', 'heading': 'Sports Taping', 'text': 'Reduction of pain by removing the pressure from the pain receptors', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/desktop-taping-3.jpg', 'alt': 'taping 3', 'heading': 'Sports Taping', 'text': 'Adjusts mis-alignments of joints to aid fascia and muscles function', 'linkUrl': '../../../contact', 'linkText': 'Contact us' },
            { 'id': 2, 'src': '/img/desktop-taping-4.jpg', 'alt': 'taping 4', 'heading': 'Sports Taping', 'text': 'Reconditions abnormal tension and strengthens the muscles', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        meta: {
            title: 'Bear Essentials Massage - Sports Taping',
            description: 'Sports taping uses an elastic therapeutic tape which is applied directly to the skin. By taping over and around the muscle the tape helps to maintain a stable position and gives support to the bones and muscles whilst keeping the full range of motion, this is turn reduces pain and helps recovery.',
            keywords: 'Sports Taping, Therapy, Treatment, Elastic, Tape, Skin, Support, Bones, Muscle, Range, Motion, Reduce, Pain, Aid, Recovery'
        },
        content: {
            heading: 'Sports Taping',
            subtitle: 'For support during recovery',
            pageName: 'sportsTaping'
        }
    };

    var hotStonesMassage = {
        items: [
            { 'id': 0, 'src': '/img/desktop-stones-3.jpg', 'alt': 'stones 3', 'heading': 'Hot Stones Massage', 'text': 'Cleanses the body, aids relaxation of the heart and soothes the mind', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/desktop-stones-7.jpg', 'alt': 'stones 7', 'heading': 'Hot Stones Massage', 'text': 'Combines the use of heat and massage strokes to provide a healing and effective experience', 'linkUrl': '../../../contact', 'linkText': 'Contact us' },
            { 'id': 2, 'src': '/img/desktop-stones-8.jpg', 'alt': 'stones 8', 'heading': 'Hot Stones Massage', 'text': 'The warmth and the gentle pressure of the stones on the body helps to promote a very relaxing experience', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        meta: {
            title: 'Bear Essentials Massage - Hot Stones Massage',
            description: 'Hot Stones Massage originates over 2000 years ago from Ancient India and China. Using only Basalt (volcanic rock) it is believed that these specific stones can cleanse the body, aid relaxation of the heart and soothe the mind.',
            keywords: 'Hot Stone Massage, Therapy, Treatment, India, China, Basalt, Volcanic, Rock, Cleanse, Body, Relaxation, Heart, Soothe, Mind'
        },
        content: {
            heading: 'Hot Stones Massage',
            subtitle: 'Healing and relaxing',
            pageName: 'hotStonesMassage'
        }
    };

    var seatedAcupressure = {
        items: [
            { 'id': 0, 'src': '/img/desktop-seated-1.jpg', 'alt': 'seated 1', 'heading': 'Seated Acupressure', 'text': 'Stimulates the acupressure points in the head, neck, shoulders, spine and lower back', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/desktop-seated-6.jpg', 'alt': 'seated 6', 'heading': 'Seated Acupressure', 'text': 'Balances and strengthens the body’s muscular, circulatory and nervous systems', 'linkUrl': '../../../contact', 'linkText': 'Contact us' },
            { 'id': 2, 'src': '/img/desktop-seated-3.jpg', 'alt': 'seated 3', 'heading': 'Seated Acupressure', 'text': 'Improves the flow of energy around the body', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        meta: {
            title: 'Bear Essentials Massage - Seated Acupressure',
            description: 'Seated acupressure massage stimulates the acupressure points in the head, neck, shoulders, spine and lower back.',
            keywords: 'Seated Acupressure, Therapy, Treatment, Stimulates, Points, Head, Neck, Shoulders, Spine, Back, Relax, Soothe, Reduce, Stress'
        },
        content: {
            heading: 'Seated Acupressure',
            subtitle: 'Improves the flow of energy',
            pageName: 'seatedAcupressure'
        }
    };

    app.get('/therapies/:selectedTherapy', function (req, res) {
        
        if (req.params.selectedTherapy === 'sports-massage') {
            res.render('therapies/' + req.params.selectedTherapy, {
                carouselItems: sportsMassage.items,
                meta: sportsMassage.meta,
                content: sportsMassage.content
            });
        }
        else if (req.params.selectedTherapy === 'sports-taping') {
            res.render('therapies/' + req.params.selectedTherapy, {
                carouselItems: sportsTaping.items,
                meta: sportsTaping.meta,
                content: sportsTaping.content
            });
        }
        else if (req.params.selectedTherapy === 'hot-stones-massage') {
            res.render('therapies/' + req.params.selectedTherapy, {
                carouselItems: hotStonesMassage.items,
                meta: hotStonesMassage.meta,
                content: hotStonesMassage.content
            });
        }
        else if (req.params.selectedTherapy === 'seated-acupressure') {
            res.render('therapies/' + req.params.selectedTherapy, {
                carouselItems: seatedAcupressure.items,
                meta: seatedAcupressure.meta,
                content: seatedAcupressure.content
            });
        } else {
            throw new Error('Therapy not found');
        }
    });

    var treatmentRoom = {
        items: [
            { 'id': 0, 'src': '/img/room-1.jpg', 'alt': 'relaxation room 1', 'heading': 'Relaxing', 'text': 'A tranquil space designed to ensure you receive the full benefit of your chosen treatment.', 'linkUrl': '../../../price-list', 'linkText': 'Price list' },
            { 'id': 1, 'src': '/img/room-2.jpg', 'alt': 'relaxation room 2', 'heading': 'Calming', 'text': 'A tranquil space designed to ensure you receive the full benefit of your chosen treatment.', 'linkUrl': '../../../contact', 'linkText': 'Contact us' },
            { 'id': 2, 'src': '/img/room-3.jpg', 'alt': 'relaxation room 3', 'heading': 'Soothing', 'text': 'A tranquil space designed to ensure you receive the full benefit of your chosen treatment.', 'linkUrl': 'mailto:patricia@bearessentialsmassage.co.uk', 'linkText': 'Book now' }
        ],
        meta: {
            title: 'Bear Essentials Massage - Treatment Room',
            description: 'Lorem ipsum dolor sit amet',
            keywords: 'Bear Essentials Massage, Treatment Room, Relaxing, Rejuvenating, Calming, Soothing, Comfortable, Professional'
        },
        content: {
            heading: 'Relaxation Room',
            subtitle: 'A relaxing sanctuary for you',
            pageName: 'relaxationRoom'
        }
    };

    app.get('/relaxation-room', function (req, res) {
        res.render('relaxation-room', {
            carouselItems: treatmentRoom.items,
            meta: treatmentRoom.meta,
            content: treatmentRoom.content
        });
    });
};