var express =  require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');  
});

app.listen(3000, function(err){
  if (err) console.log(err);
  console.log('Engine running...');
})