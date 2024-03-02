import React from "react";
import "./Dashboard.css";
import Filter from "./Sort";
import ProductCard from "../ProductCard/ProductCard";
import products from '../../data/webtech-ecomm.products.json'

function Dashboard() {
  
  return (
    <>
      <div>
        <Filter />
      </div>
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row"
      }}>
        {products.map((product)=>{
          <ProductCard product={product}/>
        })}
      </div>
    </>
  );
}

export default Dashboard;
