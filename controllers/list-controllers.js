const brasil = require("../modules/brasil-model");
const spMunicipios = require("../modules/sp-municipios-model");
const alMunicipios = require("../modules/al-municipios-model");
const piMunicipios = require("../modules/pi-municipios-model");
const rsMunicipios = require("../modules/rs-municipios-model");

class Listdata{
    static routers(){
        return{
            brasil: "/BR/:data",
            sp:"/SP/:data",
            al:"/AL/:data",
            pi:"/PI/:data",
            rs:"/RS/:data"
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
    
    al(){
        return function(req, resp, next){
            let data = req.params.data;
            alMunicipios.find({data:data})
                .then(ret=> resp.json(ret))
                .catch(err=> resp.status(400).json({erro: err.message}))
        }
    }
    pi(){
        return function(req, resp, next){
            let data = req.params.data;
            piMunicipios.find({data:data})
                .then(ret=> resp.json(ret))
                .catch(err=> resp.status(400).json({err: err.message}));
        }
    }
    rs(){
        return function(req, resp, next){
            let data = req.params.data;
            rsMunicipios.find({data:data})
                .then(ret=> resp.json(ret))
                .catch(err=> resp.status(400).json({err: err.message}));
        }
    }
}

module.exports = Listdata;