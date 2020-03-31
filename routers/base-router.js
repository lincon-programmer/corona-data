const   Basecontrolador = require("../controllers/base-controller"),
        basecontrolador = new Basecontrolador();

module.exports = (app) =>{
    const rotasBase = Basecontrolador.router();

    app.get(rotasBase.home, basecontrolador.home());
}