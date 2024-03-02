import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Filter from "./Filter";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "./Sort";

function Dashboard() {
  let product = {
    "name": "Classic Wooden Chess Set",
    "brand": "GrandMaster",
    "images": [
      {
        "img": "https://m.media-amazon.com/images/I/519k3bRnnFL._SL1080_.jpg",
        "contentType": "image/jpeg"
      }
    ],
    "description": "Handcrafted wooden chess set with beautifully carved pieces, perfect for players of all skill levels.",
    "category": ["Toys & Games", "Board Games"],
    "price": 39.99,
    "averageStar": 4.4,
    "remarks": {
      "colors": [
        {"color": "Natural Wood"}
      ],
      "sizes": [
        {"size": "Standard"}
      ]
    },
    discount:50,

  }
  return (
    <>
      
      <div>
        <Sort sortProducts={sortProducts} />
      </div>
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row"
      }}>
        <ProductCard product={product}/>
      </div>
      

    </>
  );
}

export default Dashboard;
