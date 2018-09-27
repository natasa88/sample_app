var express = require('express');
var cfenv = require('cfenv');
var bodyParser = reuire('body-parser');
var session = require('express-session');
var app = express();
var port = process.env.PORT || 5000;
var appEnv = cfenv.getAppEnv();
var https = require('https');
var passport = require('passport');
var mainRouter = require('./src/routes/mainRouter');

var nav = [
    {
        Link: '/',
        Properties: '',
        Text: 'Main Page'
    },
    {
        Link: '/myBookings',
        Properties: '',
        Text: 'My Bookings'
    }];
}];

app.set('nav', nav);
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');


if (!appEnv.islocal) {
    app.listen(appEnv.port, function(err) {
        console.log('listens on ' + appEnv.url);
    });
} else {
    https.createServer({
        key: // key.pem file,
        cert: // cert.pem file
        
    }, app).listen(9443);
    console.log('https listens on 9443')
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    key: ,// insert key,
    secret: ,//secret,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

var Strategy = ; //define strategy with certificates and secrets

passport.use(Strategy);

app.use('/', mainRouter)(nav);


module.exports = app;

