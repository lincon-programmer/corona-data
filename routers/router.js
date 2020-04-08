const   baseRotas       = require("./base-router"),
        listRouters     = require("./list-routers"),
        insertRouters   = require("./insert-routers")

module.exports = (app) =>{
    baseRotas(app);
    listRouters(app);
    insertRouters(app);
}