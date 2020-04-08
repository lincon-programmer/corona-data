const mongoose = require("mongoose");

var estadosSchema = mongoose.Schema({
    Lat:{
        type: Number
    },
    Lon:{
        type: Number
    },
    Title:{
        type: String
    },
    Casos:{
        type: Number
    },
    Obitos:{
        type: Number
    }
});

brasilSchema = mongoose.Schema({
    data:{
        type: String
    },
    casos_confirmados:{
        type: Number
    },
    Obitos:{
        type: Number
    },
    Letalidate:{
        type: String
    },
    estados:[estadosSchema]
})

var brasil = mongoose.model('BR', brasilSchema);

module.exports = brasil;