const app = require("./config/config");
require("./config/mongo")('mongodb://localhost/coronadata');

let porta = 3000;

app.listen(porta, function(){
    console.log(`corona-data listening at port: ${porta}`);
});