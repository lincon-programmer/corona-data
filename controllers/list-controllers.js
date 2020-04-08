const brasil = require("../modules/brasil-model");
const spMunicipios = require("../modules/sp-municipios-model");

class Listdata{
    static routers(){
        return{
            brasil: "/BR/:data",
            sp:"/SP/:data"
        };
    }

    brasil(){
        return function(req, resp, next){
            let data = req.params.data;
            brasil.find({data: data})
                .then(ret=> resp.json(ret))
                .catch(err=> resp.status(400).json({erro: err.message}))
        }
    }

    sp(){
        return function(req, resp, next){
            let data = req.params.data;
            spMunicipios.find({data:data})
                .then(ret=> resp.json(ret))
                .catch(err=> resp.status(400).json({erro: err.message}))
        }
    }
}

module.exports = Listdata;