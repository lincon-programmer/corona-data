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

var spMunicipios = mongoose.model('SP', municipiosSchema);

module.exports = spMunicipios;