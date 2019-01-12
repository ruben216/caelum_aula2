module.exports = function(app){

  app.get("/",function(request,response){

    response.render('home');
  
  });

}

//response.sendFile('/home/node8010/Documents/scripts_node/view/produto.ejs');
//só o nome do arquivo, não precisa rota nem extensão
  