var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/funny-porcupine', function(request, response){
    response.send('well hello there!');
});


app.listen(process.env.PORT || 4000);