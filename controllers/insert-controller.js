const brasil = require("../modules/brasil-model");

class InsertData{
    static routers(){
        return{
            brasil: "/insertBR"
        }
    }

    brasil(){
        return function(req, resp, next){
            let body = JSON.stringify(req.body)
            body = body.replace(/Óbito/g, "Obito");
            let Data = JSON.parse(body);
            console.log(Data)
            let document = new brasil(Data);
            document.save()
                .then(ret=> {
                    resp.json(ret);
                    console.log("Dados Brasil inserido com sucesso!");
                })
                .catch(err=> resp.status(400).json({erro: err.message}))
        }
    }
}

module.exports = InsertData;