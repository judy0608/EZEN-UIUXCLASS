import "./App.css";
import { useState } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import ProductDetail from "./component/ProductDetail";
import LoginPage from "./component/LoginPage";
import UserPage from "./component/UserPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [authenicate, setAuthenicate] = useState(false);
  const PrivateRoute = () => {
    return authenicate == true ? <UserPage /> : <Navigate to="login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:device/:category/:productnum"
          element={<ProductDetail />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
