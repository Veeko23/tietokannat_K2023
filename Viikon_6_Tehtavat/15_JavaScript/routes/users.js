var express = require('express');
var router = express.Router();

//HTTP GET ESIMERKKI 
/* GET users listing. */ 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/toka',function(request,response)
  {
    response.send('Olen toka reitti');
    console.log('Toka');
  }
);

// GET-metodi yhdellä parametrillä
router.get('/joku/:name',function(request,response)
  {
    response.send('hello '+request.params.name);
    console.log(request.params.name);
  }
);
// GET-metodi kahdella parametrillä
router.get('/joku2/:Ekaname/:Tokaname',function(request,response)
  {
    response.send('hello '+request.params.Ekaname+' '+request.params.Tokaname);
    console.log(+request.params.Ekaname+' ' +request.params.Tokaname);
  }
);

// Post-Metodi 
router.post('/post',function(request,response)
  {
    response.send(request.body.Ekaname+' '+request.body.Tokaname);
    console.log(request.body.Ekaname+' '+request.body.Tokaname);
  }
);
module.exports = router;