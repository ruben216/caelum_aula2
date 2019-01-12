const expConfig = require('./custom_express')();

expConfig.listen(3001,function(){
  console.log('App usando express na porta 3001.');
});

