import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Filter from "./Sort";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "./Sort";
import pData from "../../static/productData"


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


  const [productData, setProductData] = useState(pData);
  console.log(productData);

  function extractUniqueValues(data) {
    const uniqueBrands = [...new Set(data.map(item => item.brand))];
    const uniqueCategories = [...new Set(data.flatMap(item => item.category))];

    let uniqueColors = [];
    let uniqueSizes = [];

    data.forEach(item => {
      item.remarks.colors.forEach(color => {
        if (!uniqueColors.includes(color.color)) {
          uniqueColors.push(color.color);
        }
      });

      item.remarks.sizes.forEach(size => {
        if (!uniqueSizes.includes(size.size)) {
          uniqueSizes.push(size.size);
        }
      });
    });

    return { uniqueBrands, uniqueCategories, uniqueColors, uniqueSizes };
  }

  const { uniqueBrands, uniqueCategories, uniqueColors, uniqueSizes } = extractUniqueValues(productData);

  // console.log("Unique Brands:", uniqueBrands);
  // console.log("Unique Categories:", uniqueCategories);
  // console.log("Unique Colors:", uniqueColors);
  // console.log("Unique Sizes:", uniqueSizes);



  return (
    <>
      <div>
        <Sort />
      </div>
      <div className="DashboardMainDiv">
        <div className="FilterMainDiv">
          <Filter brands={uniqueBrands} categories={uniqueCategories} colors={uniqueColors} sizes={uniqueSizes}/>
        </div>
        <div className="ContentMainDiv">
          Content
        </div>

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
