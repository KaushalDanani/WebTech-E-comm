import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Filter from "./Filter";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "./Sort";
import pdata from "../../data/webtech-ecomm.products.json";



function Dashboard(props) {
  
  const [productData, setProductData] = useState(pdata);
  const [filteredProductData, setFilteredProductData] = useState([]);
  // const [sortedData, setSortedData] = useState(pData);
  const [by,setBy] = useState("");
  const [order,setOrder] = useState("");
  // console.log(productData);

  useEffect( ()=> {
    if(props.products!==undefined)
    {
      setProductData(props.products);
      setFilteredProductData(props.products);
    }
  },[props.products])

  // const [uniqueBrands,setUniqueBrands] = useState([]);
  // const [uniqueCategories,setUniqueCategories] = useState([]);
  // const [uniqueColors,setUniqueColors] = useState([]);
  // const [uniqueSizes,setUniqueSizes] = useState([]);

  // useEffect( ()=> {
  //   fetch(`http://localhost:4041/api/products/dashboard/`,{
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     mode: 'cors', 
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // setProductData(data.products);
  //       // setFilteredProductData(data.products);
        
  //       localStorage.setItem("products",JSON.stringify(data.products));
  //       console.log(JSON.stringify(data.products));
  //       setProductData(data.products);
  //       setFilteredProductData(data.products);
  //       console.log("--------------------",filteredProductData);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching products:', error);
  //     });
  // },[])

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

  function filterProducts(filters) {
    // Initial list of products to start filtering
    let filteredProducts = productData;
  
    // Apply filter for discount range
    if (filters.discount.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return filters.discount.some(range => {
          switch (range) {
            case "Below 20%":
              return product.discount < 20;
            case "20%-50%":
              return product.discount >= 20 && product.discount < 50;
            case "50%-75%":
              return product.discount >= 50 && product.discount < 75;
            case "Above 75%":
              return product.discount >= 75;
            default:
              return true;
          }
        });
      });
    }
  
    // Apply filter for price range
    if (filters.price.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return filters.price.some(range => {
          switch (range) {
            case "Below 100":
              return product.price < 100;
            case "100-300":
              return product.price >= 100 && product.price < 300;
            case "300-600":
              return product.price >= 300 && product.price < 600;
            case "Above 600":
              return product.price >= 600;
            default:
              return true;
          }
        });
      });
    }
  
    // Apply filter for quality (averageStar)
    if (filters.quality.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return filters.quality.some(quality => product.averageStar <= quality);
      });
    }
  
    // Apply filter for brand
    if (filters.brand.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return filters.brand.includes(product.brand);
      });
    }
  
    // Apply filter for category
    if (filters.category.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return product.category.some(cat => filters.category.includes(cat));
      });
    }
  
    // Apply filter for color
    if (filters.color.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return product.remarks.colors.some(color => filters.color.includes(color.color));
      });
    }
  
    // Apply filter for size
    if (filters.size.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return product.remarks.sizes.some(size => filters.size.includes(size.size));
      });
    }
  
    // Set the filtered products
    setFilteredProductData(filteredProducts);
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
            filterProducts={filterProducts}
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
