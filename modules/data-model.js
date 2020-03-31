const mongoose = require("mongoose");

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
    }
});

var dados = mongoose.model('dados', dataSchema);

module.exports = dados;