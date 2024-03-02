import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";
import NavBar from "./components/Dashboard/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/ProductPage/ProductPage";
import productsData from "./data/webtech-ecomm.products.json"
import { useEffect, useState } from "react";

function App() {

  const [products,setProducts] = useState(productsData);

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
  //       setProducts(data.products);
  //       console.log(data.products);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching products:', error);
  //     });
  // },[])

  function setSrcProducts(srcProducts){
    setProducts(srcProducts);
    console.log("src",srcProducts);
  }

  return (
    <Router>
      <NavBar setSrcProducts={setSrcProducts}/>
      <Routes>
        <Route exact path="/" element={<Dashboard products={products}/>}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        {/* <Route exact path="/error" element={<Error />} />
        <Route path="/*" element={<Error />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
