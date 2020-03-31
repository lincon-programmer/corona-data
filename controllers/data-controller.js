const dados = require("../modules/data-model");

class InsertData{
    static router(){
        return {
            insert: "/insert",
            list: "/list",
            alter: "/alter"
        };
    }

    insert(){
        return function(req, resp, next){
            let body = JSON.stringify(req.body)
            body = body.replace(/Óbito/g, "Obito");
            let Data = JSON.parse(body);
            
            for(let data of Data){

                let document = new dados(data);
                document.save()
                    .then( () =>{
                        console.log(`${data.Title} salvo com sucesso!`)
                    })
                    .catch( err=> console.log({erro: err.message}) );
            }
            
            resp.json({
                description: "Rota de insert operante",
                status: "Ok"   
            })
        }
    }

    list(){
        return function(req, resp, next){
            dados.find({})
                .then(ret=> resp.json(ret))
                .catch(err=> resp.status(400).json({erro: err.message}))
        }
    }

    update(){
        return function(req, resp, next){
            let body = JSON.stringify(req.body)
            body = body.replace(/Óbito/g, "Obito");
            let Data = JSON.parse(body);
            for(let data of Data){
                var Title = data.Title
                dados.findOneAndUpdate({Title : Title }, data)
                .catch(err=> resp.status(400).json({erro: err.message}))
            }
            resp.json({
                description: "Dados Atualizados com sucesso",
                status: "Ok"   
            })
        }
    }
}

module.exports = InsertData;