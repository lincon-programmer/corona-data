const brasil = require("../modules/brasil-model");
const spMunicipios = require("../modules/sp-municipios-model");
const alMunicipios = require("../modules/al-municipios-model");
const piMunicipios = require("../modules/pi-municipios-model");

class InsertData{
    static routers(){
        return{
            brasil: "/insertBR",
            sp: "/insertSP",
            al: "/insertAL",
            pi: "/insertPI"
        }
    }

    brasil(){
        return function(req, resp, next){
            let body = JSON.stringify(req.body)
            body = body.replace(/Óbito/g, "Obito");
            let Data = JSON.parse(body);
            let document = new brasil(Data);
            document.save()
                .then(ret=> {
                    resp.json(ret);
                    console.log("Dados Brasil inserido com sucesso!");
                })
                .catch(err=> resp.status(400).json({erro: err.message}))
        }
    }

    sp(){
        return function(req, resp, next){
            let document = new spMunicipios(req.body);
            document.save()
                .then(ret=> {
                    resp.json(ret);
                    console.log("Dados São Paulo inserido com sucesso!");
                })
                .catch(err=> resp.status(400).json({erro: err.message}))
        }
    }
    
    al(){
        return function(req, resp, next){
            let document = new alMunicipios(req.body);
            document.save()
                .then(ret=> {
                    resp.json(ret);
                    console.log("Dados Alagoas inserido com sucesso!");
                })
                .catch(err=> resp.status(400).json({erro: err.message}));
        }
    }

    pi(){
       return function(req, resp, next){
            let document = new piMunicipios(req.body);
            document.save()
                .then(ret=>{
                    resp.json(ret);
                    console.log("Dados Piaui inseridos com sucesso");
                })
                .catch(err=> resp.status(400).json({erro: err.message}));
       } 
    }
}

module.exports = InsertData;