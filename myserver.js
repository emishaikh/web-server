var express = require('express');
var app = express();
var PORT = 3000 ;


var middleWare ={
    requireAauthentication: function (req, res, next){
        console.log('private rout hit !');
    },
    logger: function(req, res, next){
        console.log(req.method + ' ' + req.originalUrl);
        next();
    }
};
 app.use(middleWare.logger);

//app.use(middleWare.requireAauthentication);
app.get('/', function(req ,res){
    res.send('Hello word');
});
app.get('/about', function(req ,res) {
    res.send('About Us' );
});


app.use(express.static(__dirname + '/public'));


app.listen(PORT, function (){
    console.log('srver is started');
}

);

