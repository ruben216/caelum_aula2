module.exports = function(app){

  app.get("/produto",function(request,response){
    
    //response.render('produto');
    
    const conexao = require('../config/connectionFactory');
    const ProdutoDao = require('../repository/produtoDAO');
    const produtoDao = new ProdutoDao(conexao);

    produtoDao.listar( (erro,resultados) => {
        //console.log(resultados);
        if (erro) throw 'ERRORRR';
        response.render('produto',{Lista : resultados});
      }
    );
    //
    conexao.end();


  });

}

//response.sendFile('/home/node8010/Documents/scripts_node/view/produto.ejs');
//só o nome do arquivo, não precisa rota nem extensão
  