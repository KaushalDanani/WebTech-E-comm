import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";
import NavBar from "./components/Dashboard/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        {/* <Route exact path="/error" element={<Error />} />
        <Route path="/*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
