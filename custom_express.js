const express = require('express');

/* module.exports = function(){
   const app = express();
   app.set('view engine','ejs')
   return app;
}*/

function expressConfigurado(){
  const app = express();
  app.set('view engine','ejs');
  app.use(
      '/static',
      express.static('./node_modules/bootstrap/dist'));
  require('./routes/index')(app);
  require('./routes/produto')(app);
  //equivalente a const rotaProdutos = require('./rota/produtos')
  //rotaProdutos(app);
  app.use(function (error,request,response,next){
    let erro = "Página não encontrada. Tente outra vez..."
    response.status(404).render('error',{erro})
    
  })

  app.use

  return app;
  
}
module.exports = expressConfigurado;