const mongoose = require('mongoose');


const productdetilsSchema = new mongoose.Schema(
    {
        category_id:
        {
            type:String
        },
        product_name:
        {
            type:String
        },
        price:
        {
            type:String
        },
        quantity:
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

module.exports=mongoose.model("prodetils",productdetilsSchema)