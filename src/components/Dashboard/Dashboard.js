import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Filter from "./Filter";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "./Sort";
import pData from "../../static/productData"


function Dashboard(props) {
  
  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);
  // const [sortedData, setSortedData] = useState(pData);
  const [by,setBy] = useState("");
  const [order,setOrder] = useState("");
  // console.log(productData);

  // const [uniqueBrands,setUniqueBrands] = useState([]);
  // const [uniqueCategories,setUniqueCategories] = useState([]);
  // const [uniqueColors,setUniqueColors] = useState([]);
  // const [uniqueSizes,setUniqueSizes] = useState([]);

  useEffect( ()=> {
    fetch(`http://localhost:4041/api/products/dashboard/`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', 
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // setProductData(data.products);
        // setFilteredProductData(data.products);
        
        localStorage.setItem("products",JSON.stringify(data.products));
        console.log(JSON.stringify(data.products));
        setProductData(data.products);
        setFilteredProductData(data.products);
        console.log("--------------------",filteredProductData);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },[])

  // useEffect( ()=> {
  //   if(props.products!==undefined)
  //   {
  //     setProductData(props.products);
  //     console.log("DDD",props.products);
  //   }
  // },[props.products]);

  // useEffect( ()=> {
  //   if(props.products!==undefined)
  //   {
  //     setFilteredProductData(props.products);
  //   }
  // },[props.products]);

  // useEffect(()=>{
  //   if(props.products!==undefined)
  //   {
  //     const {uniqueBrands, uniqueCategories, uniqueColors, uniqueSizes} = extractUniqueValues(productData);
  //     setUniqueBrands(uniqueBrands);
  //     setUniqueCategories(uniqueCategories);
  //     setUniqueColors(uniqueColors);
  //     setUniqueSizes(uniqueSizes);
  //   }
  // },[props.products]);

  function extractUniqueValues(data) {
    // console.log("saiodhoaikdnjsdnf",localStorage.getItem("products"));
    // let data = ;
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

  function filterDiscount(disc) {
    console.log(disc);
    if(disc.includes("Below 20%"))
    {

    }
  }
  function filterPrice(disc) {
    console.log(disc);
  }
  function filterQuality(disc) {
    console.log(disc);
  }

  function filterBrand(disc) {
    if (disc.length === 0) {
      setFilteredProductData(productData);
      return;
    }
    // let productsAll = JSON.parse(localStorage.getItem("products")); 
    const newData = productData.filter(product => disc.includes(product.brand));
    setFilteredProductData(newData);

  }

  function filterCategory(disc) {
    if (disc.length === 0) {
      setFilteredProductData(productData);
      return;
    }

    const newData = productData.filter(product => product.category.some(cat => disc.includes(cat)));
    setFilteredProductData(filteredProductData => {
      
      const combinedData = [...filteredProductData, newData];
  
      const uniqueData = Array.from(new Set(combinedData));
      setFilteredProductData(uniqueData);
    });


  }

  function filterColor(disc) {
    if (disc.length === 0) {
      setFilteredProductData(productData);
      return;
    }

    const newData = productData.filter(product => product.remarks.colors.some(color => disc.includes(color.color)));
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

  useEffect( () => {

    sortProducts(by,order);
  
  },[filteredProductData])

  function sortProducts(by, order) {

    setBy(by);
    setOrder(order);

    if (by === "" || order === "")
      return;

    var newSortedData = "";
    if (by === "Price") {
      if (order === "Ascending") {
        newSortedData = filteredProductData.slice().sort((a, b) => a.price - b.price);
        // setProductData(newSortedData);
      }
      else if (order === "Descending") {
        newSortedData = filteredProductData.slice().sort((a, b) => b.price - a.price);
        // setProductData(newSortedData);
      }
      else {
        setFilteredProductData(productData);
      }
    }
    else if (by === "Quality") {
      if (order === "Ascending") {
        newSortedData = filteredProductData.slice().sort((a, b) => a.averageStar - b.averageStar);
        // setProductData(newSortedData);
      }
      else if (order === "Descending") {
        newSortedData = filteredProductData.slice().sort((a, b) => b.averageStar - a.averageStar);
        // setProductData(newSortedData);
      }
      else {
        setFilteredProductData(productData);
      }
    }
    else if (by === "Discount") {
      if (order === "Ascending") {
        newSortedData = filteredProductData.slice().sort((a, b) => a.discount - b.discount);
        // setProductData(newSortedData);
      }
      else if (order === "Descending") {
        newSortedData = filteredProductData.slice().sort((a, b) => b.discount - a.discount);
        // setProductData(newSortedData);
      }
      else {
        setFilteredProductData(productData);
      }
    }
    else if (by === "Sales") {
      if (order === "Ascending") {
        newSortedData = filteredProductData.slice().sort((a, b) => a.noOfOrder - b.noOfOrder);
        // setProductData(newSortedData);
      }
      else if (order === "Descending") {
        newSortedData = filteredProductData.slice().sort((a, b) => b.noOfOrder - a.noOfOrder);
        // setProductData(newSortedData);
      }
      else {
        setFilteredProductData(productData);
      }
    }
    else {
      setFilteredProductData(productData);
    }

    setFilteredProductData(newSortedData);
  }


  return (
    <>
      
      <div>
        <Sort sortProducts={sortProducts} />
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
            {filteredProductData.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

      </div>
      

    </>
  );
}

export default Dashboard;
