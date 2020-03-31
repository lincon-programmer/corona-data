class Basecontrolador{
    static router(){
        return {
            home: '/'
        };
    }

    home(){
        return function(req, resp, next){
            resp.json({
                app: "corona-data",
                description: "Api de informação do coronavírus no Brasil",
                version: "0.0.1"
            })
        };
    }
}

module.exports = Basecontrolador;