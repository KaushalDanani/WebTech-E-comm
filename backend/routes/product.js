const router = require('express').Router();
const Product = require("mongoose").model("Product");
router.get("/api/products/dashboard",async (req,res)=>{
    try {
        const products = await Product.find(
            {},{
                _id:1,name:1,brand:1,image:1,price:1,averageStar:1
            }
        );
        return res.status(200).json({success:true,products});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,status:5000});
    }
});

module.exports = router;