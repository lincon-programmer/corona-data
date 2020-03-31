const   InsertData = require("../controllers/data-controller"),
        insertdata = new InsertData();

module.exports = (app) =>{
    const rotasData = InsertData.router();

    app.post(rotasData.insert, insertdata.insert());
    app.get(rotasData.list, insertdata.list());
    app.patch(rotasData.alter, insertdata.update());
}