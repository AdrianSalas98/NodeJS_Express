let express = require('express')
var bodyParser = require('body-parser');
let app = express();
var login = [{name : 'WizKhalifa', pass : "123"},
                {name : 'SnoppDog', pass : "456"},
               {name : 'TupacShakur', pass : "789"}];

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("formulario");
});

app.post('/', function (req,res){

  for (var i = 0; i < login.length; i++) {
    if(login[i]['name'] == req.body.nombre && login[i]['pass'] == req.body.password){

      let usuarioLoged = {name:req.body.nombre,pass:req.body.password};

      res.send({usuario:JSON.stringify(usuarioLoged)});
      return;
    }
  }
  res.send("Error: Usuario incorrecto..");
});

app.get('/api/login/:nombre/:password', function (req,res){
  for (var i = 0; i < login.length; i++) {
    if(login[i]['name'] == req.params.nombre && login[i]['pass'] == req.params.password){

      let usuarioLoged = {name:req.params.nombre,pass:req.params.password};

      res.send({usuario:JSON.stringify(usuarioLoged)});
      return;
    }
  }
  res.send("Error: Usuario incorrecto..");
});

app.listen(3000, function () {
  console.log('Escuchando en el puerto 3000!');
});
