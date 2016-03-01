
'use strict';

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {});
    });

    app.get('/contact', function (req, res) {
        res.redirect('http://www.alt-f1.be/contact-us.html');
    });
    app.get('/template/:selectedTemplate', function (req, res) {
        res.render('bootstrap3-templates/' + req.params.selectedTemplate, {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/' + req.params.selectedTemplate
        });
    });
    app.get('/home', function (req, res) {
        res.render('home', {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/carousel'
        });
    });
    app.get('/about', function (req, res) {
        res.render('about', {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/carousel'
        });
    });
    app.get('/cover', function (req, res) {
        res.render('cover', {
            'pathToAssets': '/bootstrap-3.3.1',
            'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/cover'
        });
    });
};