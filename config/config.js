const   express     = require("express"),
        bodyparser  = require("body-parser"),
        routers     = require("../routers/router"),
        swaggerDoc  = require("../routers/swaggerDoc"),
        cors        = require("cors"),
        app         = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
routers(app);
swaggerDoc(app);

module.exports = app;