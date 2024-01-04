const mongoose = require ('mongoose')

const AdoptionSchema = new mongoose.Schema({
    image :{
        type :String,
        require:true
    },
    name :{
        type :String,
        require:true
    },
    breed:{
        type:String,
        require:true
    },
    guardianname :{
        type :String,
        require:true
    },
    location :{
        type :String,
        require:true
    },
    phonenumber :{
        type :String,
        require:true
    },
    sex:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    }

    
})

const adoption = new mongoose.model('Adoption',AdoptionSchema)
module.exports = adoption;