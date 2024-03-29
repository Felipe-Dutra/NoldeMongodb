var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/noderest';

MongoClient.connect(servidor, function(erro, db) {
    if(erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else  
        console.log("Conexão estabelecida com sucesso.");
    
    var cliente = {
        codigo : 1,
        nome : "Marcio Gomez",
        endereco : {
            logradouro : "Rua dos Bobos",
            numero : "123",
            bairro : "Bairro ferraz",
            cidade : "Rio de Janeiro",
            estado : "RJ"
        },
        status : "Ativo",
        pontos : 10
    }

    var colecao = db.collection("clientes");   

    colecao.insertOne(cliente, function(erro, resultado){
      if(erro)
          console.log("Erro ao inserir documento: " + erro);
      else    
          console.log("Documento inserido com sucesso");
    });

    db.close();
});