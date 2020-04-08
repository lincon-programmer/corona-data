const   Listdata = require("../controllers/list-controllers"),
        listdata = new Listdata();

module.exports = (app) =>{
    const listRouters = Listdata.routers();

    app.get(listRouters.brasil, listdata.brasil());
}