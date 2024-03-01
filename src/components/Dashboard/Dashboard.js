import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Dashboard.css";
import Sort from "./Sort";
import Filter from "./Filter";
import pData from "../../static/productData"

function Dashboard() {

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
    </>
  );
}

export default Dashboard;
