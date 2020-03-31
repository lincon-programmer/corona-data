const   baseRotas = require("./base-router"),
        dataRouter= require("./data-router")

module.exports = (app) =>{
    baseRotas(app);
    dataRouter(app);
}