'use strict';

var PORT_LISTENER = 3001;
console.log('I am listening to this port: http://localhost:%s', PORT_LISTENER);

var express = require('express'),
    http = require('http'),
    path = require('path');

var appConfig = require('./config/appConfig.json');

var mongoose = require('mongoose');
mongoose.connect(appConfig.app.blogConnectionString);

var stringUtils = require('./utils/string');
stringUtils.initialise();

var app = express();

// all environments
app.set('port', process.env.PORT || PORT_LISTENER);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({ keepExtensions: true, uploadDir: path.join(__dirname, appConfig.directories.publicDir) }));
app.use(express.methodOverride());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(express.cookieParser('my v3ry s3cr3t C00k1e k3y d0nt y0u th1nk?'));
app.use(express.session({
    secret: 'my l1ttl3 s3cret s3ss10n k3y isnt it?',
    maxAge: 3600000
}));

//routes
require('./routes/index')(app);
require('./routes/therapies')(app);
require('./routes/blog')(app);
require('./routes/sitemap')(app);

app.use(app.router);
app.use(express.static(path.join(__dirname, appConfig.directories.publicDir)));

app.use(function (req, res, next) {
    console.log('req.body: ' + JSON.stringify(req.body));
    next();
});

var meta = {
    title: 'Bear Essentials Massage',
    description: 'Based in Brighton and Hove, Bear Essentials Massage offers a number of medical and therapeutic treatments to aid relaxation, tension and stress release.',
    keywords: 'Home, Bear Essentials Massage, Brighton, Hove, Treatment, Therapy, Sports Massage, Sports Taping, Hot Stone Massage Pregnancy Massage, Seated Acupressure'
};
var content = {
    heading: 'Bear Essentials Massage',
    subtitle: 'Here to help you recover, relax and rejuvenate.',
    bodyText: 'Ooops it looks like something has gone wrong, please excuse us whilst we tidy up a bit, why not try a different page for the moment.',
    imageClass: 'home',
    pageName: 'home',
    ctaText: 'Price List',
    ctaLink: '/price-list'
};

// handle 404
app.use(function (req, res) {
    res.status(404);
    res.render('404.jade', {
        meta: meta,
        content: content
    });
});

// handle 500
/* jshint unused: vars */
app.use(function (error, req, res, next) {
    res.status(500);
    res.render('500.jade', {
        meta: meta,
        content: content
    });
});

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});