var passport = require('passport');

module.exports = function (app) {
    
    app.get('/', function (req, res) {
        res.render('login', { user : req.user });
    });
    
};