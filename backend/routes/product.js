const { dblClick } = require("@testing-library/user-event/dist/click");
const { query } = require("express");

const router = require("express").Router();
const Product = require("mongoose").model("Product");

router.get("/api/products/dashboard", async (req, res) => {
  try {
    const products = await Product.getProducts();
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, status: 5000 });
  }
});

router.get("/api/products/search", async (req, res) => {
  const { query } = req.query;
  try {
    console.log("Hi");
    const products = await Product.findByQuery(query);
    console.log(products);
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
});

router.get("/api/products/:id", async (req, res) => {
  const id = req.id;
  try {
    console.log("Hi");
    const products = await Product.findById(id);
    console.log(products);
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
});

const filterKeys = [
  "minPrice",
  "maxPrice",
  "star",
  "brand",
  "discount",
  "newArrival",
];

router.get("/api/products/filter", async (req, res) => {
  let filterQuery = {};
  filterQuery["query"] = req.query.query;
  let { query, minPrice, maxPrice, star, brand, discount, newArrival } =
    req.query;

  //   for(let key in filterKeys){
  //       if(req.query[key]){
  //           filterQuery[key] = req.query[key];
  //       }else{
  //         filterQuery[key]
  //       }
  //   }
  let searchQuery = {};
  let i = 0;
  if (minPrice) {
    console.log(1);
    console.log(minPrice);
    searchQuery.price= { $gte: minPrice } ;
  }

  if (maxPrice) {
    console.log(2);
    searchQuery.price={ $lte: maxPrice } ;
  }

  if (star) {
    console.log(3);
    searchQuery.averageStar= { $gte: star } ;
  }

  if (brand) {
    console.log(4);
    searchQuery.brand= { $eq: brand } ;
  }

  // if(newArrival){
  //     and.push({});
  // }

  if (discount) {
    console.log(5);
    searchQuery.discount= { $gte: discount };
  }

  // let or = [];
  // if(query)
//   const searchQuery = {
//     name: { $regex: query ? query : "", $options: "i" }, // Search by name (case-insensitive)
//     price: { $gte: minPrice },
//   };

  //   db.products.find({
  //     $or: [
  //       { name: { $regex: "A", $options: "i" } },
  //       { $and: [{ price: { $gte: 2000 } } ]},
  //     ],
  //   });
  // if(filter)

  try {
    let products = await Product.find(searchQuery);

    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
});

module.exports = router;
