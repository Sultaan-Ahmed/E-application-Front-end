import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import ProductDetails from "./components/Product/ProductDetails";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
