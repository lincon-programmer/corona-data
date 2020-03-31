const mongoose = require("mongoose");

module.exports = (uri) =>{
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.set('useCreateIndex', true);
    mongoose.connection.on('connected', function(){
        console.log(`Mongo conectado em: ${uri}`);
    });
    mongoose.connection.on('disconnected', function(){
        console.log(`Mongo desconectado de: ${uri}`);
    });
    mongoose.connection.on('error', function(erro){
        console.log(`Erro de conexão com Mongo: ${erro}`);      
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(`Conexão com o Mongo finalizada pelo término da aplicação`);
            process.exit(0);
        });
    })
}