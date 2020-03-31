const app = require("./config/config");
require("./config/mongo")('mongodb+srv://lincon:px29Lincon@cluster0-qionx.mongodb.net/test?retryWrites=true&w=majority');

let porta = process.env.PORT || 3000;

app.listen(porta, function(){
    console.log(`corona-data listening at port: ${porta}`);
});