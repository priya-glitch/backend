const mongoose = require('../connection');

const schema = new mongoose.Schema({
    
    
    title : String,
    description : String,
    tags : Array,
    // heroimage : String,
    data: String,
    published : { type: Date, default: new Date() },
    // author : {type :mongoose.Types.ObjectId, ref: "users"}
    
})

const model = mongoose.model('blog', schema);

module.exports = model;



// tags from material ui , autocomplete api.... populate function

// markdown editor
