const mongoose = require('mongoose');


const productcatSchema = new mongoose.Schema(
    {
        category_name:
        {
            type:String
        },
        createdAt:
        {
            type:String
        },
        updatedAt:
        {
            type:String
        }
    }
)

module.exports=mongoose.model("procat",productcatSchema)