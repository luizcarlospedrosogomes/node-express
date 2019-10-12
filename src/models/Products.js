const mongodb  = require('mongoose');

const ProductSchema = new mongodb.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    }, 
    createAt:{
        type:Date,
        default:Date.now
    }
})

mongodb.model('Product', ProductSchema);
