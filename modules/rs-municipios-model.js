const mongoose = require("mongoose");

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

var rsSchema = mongoose.Schema({
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

var rsMunicipios = mongoose.model('RS', rsSchema);

module.exports = rsMunicipios;