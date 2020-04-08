const brasil = require("../modules/brasil-model");

class Listdata{
    static routers(){
        return{
            brasil: "/BR/:data"
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
}

module.exports = Listdata;