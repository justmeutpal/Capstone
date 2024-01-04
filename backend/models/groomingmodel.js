const mongoose = require('mongoose')



const groom = new mongoose.Schema({ 
  
    name: { 
        type: String, 
        require: true
    }, 
    imageurl:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    latitude:{
        type:String,
        require:true
    },
    longitude:{
        type:String,
        require:true
    },
    grooming: [
        {
          key: {
            type: String,
            required: true,
          },
        },
      ], 
    desc: {
    type: String,
    required: true,
  },
    
   
}) 

const groomingmodel = new mongoose.model("groomdata", groom);
module.exports = groomingmodel;