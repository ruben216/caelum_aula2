const http = require ('http');
//console.log(http);

const server = http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
   
    console.log("Olá server. Nova interação :)");
   
    console.log(request.url);

        if(request.url == '/'){
            response.end('<h1>  Início ! <br> Seja bem vindo :)  </h1>');
        } else if(request.url == '/produtos'){
            response.end('<h1>  Nossos produtos  <br>  :)  </h1>');
        }else if(request.url == '/json'){
            response.writeHead(200,{'Content-Type': 'application/json;charset=utf-8'});
            const dados = {escola : 'caelum', cidade : 'Sao Paulo'};
            response.end(JSON.stringify(dados));
        }else if(request.url == '/contato'){
            response.end('<h1>  Entre em contato!  <br>  :)  </h1>');
        }

}).listen(3000,'localhost');;


console.log("servidor escutando... http://localhost:3000");