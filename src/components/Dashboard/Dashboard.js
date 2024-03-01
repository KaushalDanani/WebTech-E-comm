import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Filter from "./Filter";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "./Sort";
import pData from "../../static/productData"


function Dashboard() {
  let product = [{
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

  }]


  const [productData, setProductData] = useState(pData);
  const [filteredProductData, setFilteredProductData] = useState(pData);
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
  
  function filterDiscount(disc){
    console.log(disc);
  }
  function filterPrice(disc){
    console.log(disc);
  }
  function filterQuality(disc){
    console.log(disc);
  }

  function filterBrand(disc) {
    if (disc.length === 0) {
      setFilteredProductData(productData);
      return;
    }
  
    const newData =  productData.filter(product => disc.includes(product.brand));
    setFilteredProductData(newData);
  }
  
  function filterCategory(disc) {
    if (disc.length === 0) {
      setFilteredProductData(productData);
      return;
    }
  
    const newData= productData.filter(product => product.category.some(cat => disc.includes(cat)));
    setFilteredProductData(newData);
  }
  
  function filterColor(disc) {
    if (disc.length === 0) {
      setFilteredProductData(productData);
      return;
    }
  
    const newData= productData.filter(product => product.remarks.colors.some(color => disc.includes(color.color)));
    setFilteredProductData(newData);
  }

  function filterSize(disc) {
    if (disc.length === 0) {
      setFilteredProductData(productData);
      return;
    }
    
    const newData = productData.filter(product => {
      return product.remarks.sizes.some(size => disc.includes(size.size));
    
    });
    setFilteredProductData(newData);
  }
  

  return (
    <>
      <div>
        <Sort />
      </div>
      <div className="DashboardMainDiv">
        <div className="FilterMainDiv">
          <Filter brands={uniqueBrands} categories={uniqueCategories} colors={uniqueColors} sizes={uniqueSizes}
          filterDiscount={filterDiscount}
          filterBrand={filterBrand}
          filterCategory={filterCategory}
          filterColor={filterColor}
          filterPrice={filterPrice}
          filterQuality={filterQuality}
          filterSize={filterSize}
          />
        </div>
        <div className="ContentMainDiv">
          <div className="ContentMainTitle">All Products</div>
          <div className="ProductGrid">
          {filteredProductData.map((product,index) => (
            <div key={index}>
            <ProductCard product={product}/>
            </div>
          ))}
          </div>
        </div>

      </div>
      
      
      {/* <ProductCard product={product}/> */}
      
      
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row"
      }}>
        gfr
      </div>
    </>
  );
}

export default Dashboard;
