const User = require('../models/user');

exports.signup = function(req, res, next) {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password
    // See if a user with a given email exists
    User.findOne({ email }, function(err, existingUser) {
        if(err) {
            return next(err);
        }

        // If a user with email does exist, return an error
        if(existingUser) {
            return res.status(422).send({ error: 'Email is in user' });
        }

        // If a user with email does NOT exist, create and save user record
        const user = new User({
            email,
            password
        });

        user.save(function(err) {
            if(err) {
                return next(err);
            }

            // Respond to request that indicating the user was created
            res.json({ success: true });
        });
    });
}