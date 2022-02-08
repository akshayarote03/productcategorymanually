const express = require('express'); 
const router = express();
const procat = require('../Model/productcategory');
const productdetils = require('../Model/productdetils');



router.get('/getproductcate',async (req,res)=>
{
     try
     {
        let result = await procat.find();
        res.status(200).json(result)
     }
     catch(e)
     {
         res.status(400).json(
             {
                 procat:null
             }
         )
     }

     
})


router.get('/productcate',async (req,res)=>
{
     try
     {
         
         let catid = req.body.catid;
        let result = await procat.findById(catid);
        let product = await productdetils.find({category_id:catid})
        product = product.slice(product.length-3,product.length);
        //console.log(product.slice(`${product.length-2},${product.length}`))
        //console.log(catid);
        res.status(200).json({
            "_id":result._id,
            "category_name":result.category_name,
            "createdAt":result.createdAt,
            "updatedAt":result.updatedAt,
            "category_details":product
        })
     }
     catch(e)
     {
         res.status(400).json(
             {
                 procat:null
             }
         )
     }

     
})



router.post('/addproductcate', async(req,res)=>
{
    try
    {
        let date = new Date().toLocaleDateString('en-US',{timeZone:'Asia/Kolkata'})
        let time = new Date().toLocaleTimeString('en-US',{ hour12: false })
        //date += date.substr(3,1)
        let datastr = `${date.substr(4,4)}-${date.substr(0,1)}-${date.substr(2,1)}T${time}1Z`;
       console.log(time);
        
        const data =
        {
            category_name:req.body.category_name,
            createdAt:datastr,
            updatedAt:datastr
        }

        const result = await new procat(data);
        result.save();
        console.log(result);

        res.status(200).json(result)

    }
    catch(e)
    {
         res.status(400).json(
             {
                 message:"product category not added",
                 procat:null
             }
         )
    }
})
router.put('/updateproductcate/:id', async(req,res)=>
{
    try
    {

        let date = new Date().toLocaleDateString('en-US',{timeZone:'Asia/Kolkata'})
        let time = new Date().toLocaleTimeString('en-US',{ hour12: false })

        let datastr = `${date.substr(4,4)}-${date.substr(0,1)}-${date.substr(2,1)}T${time}1Z`;
      // console.log(datastr);
        
       let result = await procat.findByIdAndUpdate(req.params.id,{updatedAt:datastr},{$set:req.body})
    
       console.log(result);
       res.status(200).json(result)
    }
    catch(e)
    {
       res.status(400).json({
           procat:null
       })
    }
})


router.delete('/deleteproductcate/:id',async(req,res)=>
{
    try{
          let result = await procat.findByIdAndDelete(req.params.id);
          res.status(200).json(result)
    }
    catch
    {
        res.status(400).json({
            procat:null
        })
     }
    
})

module.exports=router