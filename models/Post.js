const mongoose =require('mongoose');
const PostSchema= mongoose.Schema({

    instrument:{
        type:String,
        require:true,
    },
    
    price:{
        type:String,
        require:true,
    },

    color:{
        type:String,
        require:true,
    },

    year:{
        type:String,
        require:true,

    },

    comments:{
        type:String,
        require:true,
    },

    Date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Posts',PostSchema);