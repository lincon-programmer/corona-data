const mongoose = require("mongoose");

//var casos_por_Municipio = new mongoose.Schema({}, { strict: false });

var casos_por_Municipio = mongoose.Schema({
    Municipio:{
        type: String
    },
    Total_De_Casos:{
        type: Number
    },
    Total_De_Obitos:{
        type: Number
    }
})

var dataSchema = mongoose.Schema({
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
    },
    casos_por_Municipio: [casos_por_Municipio]
});

var dados = mongoose.model('dados', dataSchema);

module.exports = dados;