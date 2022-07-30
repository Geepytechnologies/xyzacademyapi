const mongoose =  require('mongoose');

const CongressSchema = new mongoose.Schema(
    {
        name : {type: String, required: true},
        email : {type: String, required: true, unique: true},
        location : {type: String, required: true},
        phone : {type: String, required: true},
    },
    {timestamps: true}
);

module.exports = mongoose.model("congress", CongressSchema)