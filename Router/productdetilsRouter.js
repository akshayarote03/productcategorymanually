const express = require('express')
const router = express()
const prodetils = require('../Model/productdetils')
//const procat = require('../Model/productcategory')





router.post('/addproductdetils', async(req,res)=>
{
    try
    {
        let date = new Date().toLocaleDateString('en-US',{timeZone:'Asia/Kolkata'})
        let time = new Date().toLocaleTimeString('en-US',{ hour12: false })
        //date += date.substr(3,1)
        let datastr = `${date.substr(4,4)}-${date.substr(0,1)}-${date.substr(2,1)}T${time}1Z`;
       console.log(time);
       //const cate = await procat.findById(req.body.id);
        const data =
        {
            category_id:req.body.category_id,
            product_name:req.body.product_name,
            price:req.body.price,
            quantity:req.body.quantity,
            createdAt:datastr,
            updatedAt:datastr
        }

        const result = await new prodetils(data);
        result.save();
        console.log(result);

        res.status(200).json(result)

    }
    catch(e)
    {
         res.status(400).json(
             {
                 message:"product detils not added",
                 prodetils:null
             }
         )
    }
})






module.exports = router

