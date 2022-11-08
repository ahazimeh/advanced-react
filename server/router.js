const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        console.log(req.user) // thanks to passport we have this property available
        res.send({ hi: 'there' });
    });

    app.post('/signin', requireSignin,Authentication.signin); // note when going

    app.post('/signup', Authentication.signup);
}
