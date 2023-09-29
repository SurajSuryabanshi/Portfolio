const bodyParser = require('body-parser');
const  express = require('express');
const methodOverride = require('method-override');
const  morgan = require('morgan');
const compress = require('compression');
    

module.exports=()=>{
    var app=express();
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    } else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(bodyParser.json());

    app.use(methodOverride());

    app.set('views','./app/views/');

    app.set('view engine','ejs');

    app.use('/', require('../app/routes/index.server.routes.js'));

    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));
    return app;
}