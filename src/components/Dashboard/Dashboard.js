import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Filter from "./Sort";
import ProductCard from "../ProductCard/ProductCard";

function Dashboard() {
  // let product = {
  //   "name": "Classic Wooden Chess Set",
  //   "brand": "GrandMaster",
  //   "images": [
  //     {
  //       "img": "https://m.media-amazon.com/images/I/519k3bRnnFL._SL1080_.jpg",
  //       "contentType": "image/jpeg"
  //     }
  //   ],
  //   "description": "Handcrafted wooden chess set with beautifully carved pieces, perfect for players of all skill levels.",
  //   "category": ["Toys & Games", "Board Games"],
  //   "price": 39.99,
  //   "averageStar": 4.4,
  //   "remarks": {
  //     "colors": [
  //       {"color": "Natural Wood"}
  //     ],
  //     "sizes": [
  //       {"size": "Standard"}
  //     ]
  //   },
  //   discount:50,

  // }
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4041/api/products/dashboard",{
      method:"GET",
      mode:'cors',

    }).then(async (res)=>{
      console.log("HH");
      const data = await res.json();
      if(data.success){
        console.log("HH");
        setProducts(data.products);
        console.log(data.products);
      }
    }).catch((err)=>{
      console.log(err);
    })
  },[]);

  return (
    <>
      <div>
        <Filter />
      </div>
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row",
        gap:"20px",
      }}>
        {
          products.map((product)=>{
            return (
              <ProductCard key={product._id} product={product}/>
            );
          })
        }
      </div>
    </>
  );
}

export default Dashboard;
