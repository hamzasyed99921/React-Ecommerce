import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./components/Layouts/Base";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./components/Elements/SingleProduct";
import Cart from "./components/Cart";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/*" element={<PageNotFound />}/> */}
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
