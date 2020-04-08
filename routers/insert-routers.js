const   InsertData = require("../controllers/insert-controller"),
        insertdata = new InsertData();

module.exports = (app) =>{
    const insertRouters = InsertData.routers();

    app.post(insertRouters.brasil, insertdata.brasil());
    app.post(insertRouters.sp, insertdata.sp());
    app.post(insertRouters.al, insertdata.al());
}