const   express     = require("express"),
        bodyparser  = require("body-parser"),
        routers     = require("../routers/router"),
        cors        = require("cors"),
        app         = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
routers(app);

module.exports = app;