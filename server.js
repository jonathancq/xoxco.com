var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.get('/2013/:folder/:subfolder/:file',function(req,res) {
	res.redirect(req.param('folder') + '/' + req.param('subfolder') + '/' + req.param('file'));
});

app.get('/2013/:folder/:file',function(req,res) {
	res.redirect(req.param('folder') + '/' + req.param('file'));
});



app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000);
