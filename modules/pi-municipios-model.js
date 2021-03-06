const mongoose = require("mongoose");

//var casos_por_Municipio = new mongoose.Schema({}, { strict: false });

var municipiosSchema = mongoose.Schema({
    Municipio:{
        type: String
    },
    Total_De_Casos:{
        type: Number
    },
    Total_De_Obitos:{
        type: Number
    }
});

var piauiSchema = mongoose.Schema({
    data:{
        type: String
    },
    estado:{
        type: String
    },
    casos:{
        type: Number
    },
    obitos:{
        type: Number
    },
    casos_por_municipio:[municipiosSchema]
})

var piMunicipios = mongoose.model('PI', piauiSchema);

module.exports = piMunicipios;