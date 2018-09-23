const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/api/item');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    console.log('fg')
    res.redirect('http://localhost:4200/users');
});

module.exports = router;