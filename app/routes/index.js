
'use strict';

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('cover', {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/cover'
        });
    });
    app.get('/home', function (req, res) {
        res.render('cover', {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/cover'
        });
    });

    app.get('/about', function (req, res) {
        res.render('about', {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/carousel'
        });
    });
    
    app.get('/contact', function (req, res) {
        res.render('contact', {
            'carouselItems': [
                { 'id': 0, 'src': '/img/spa-1.jpg', 'alt': 'spa 1', 'heading': 'Lorem ipsum', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'linkUrl': '#', 'linkText': 'Call to action' },
                { 'id': 1, 'src': '/img/spa-2.jpg', 'alt': 'spa 2', 'heading': '', 'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'linkUrl': '#', 'linkText': 'Do something' },
                { 'id': 2, 'src': '/img/spa-4.jpg', 'alt': 'spa 4', 'heading': '', 'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', 'linkUrl': '#', 'linkText': 'Or not wevs' },
                { 'id': 3, 'src': '/img/woman.jpg', 'alt': 'woman', 'heading': '', 'text': 'Woman in the picture who are you?', 'linkUrl': '#', 'linkText': 'Hey click me' }
            ]
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