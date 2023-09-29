var express=require('express');
var router=express.Router();

// Get Home Page
router.get('/', function(req, res, next){
    res.render('pages/index',{title: 'Home'});
});

router.get('/about', function(req, res, next){
    res.render('pages/aboutme',{title: 'About'});
});

router.get('/projects', function(req, res, next){
    res.render('pages/projects',{title: 'Products'});
});

router.get('/contact', function(req, res, next){
    res.render('pages/contact',{title: 'Contact'});
});

router.get('/services', function(req, res, next){
    res.render('pages/services',{title: 'Services'});
});

router.post('/submit', (req, res) => {
    // Redirect the user back to the Home Page after form submission
    res.redirect('/');
});


module.exports=router;