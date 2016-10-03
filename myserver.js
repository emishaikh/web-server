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
app.get('/gmail', function(req ,res) {
    res.send('www.gmail.com' );
});


app.use(express.static(__dirname + '/public'));


app.listen(PORT, function (){
    console.log('srver is started');
}

);

