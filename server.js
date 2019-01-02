const express = require('express'),
    cookieParser = require('cookie-parser');

const app = express();
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.get('/', function(req, res){
    var username = "jfabian";
    req.session.username = username;
    res.send('Capturando el username')
})
app.get('/miUsername', function(req, res){
    res.send('Mi username: '+req.session.username)
})
app.use(cookieParser());
app.listen(8000);