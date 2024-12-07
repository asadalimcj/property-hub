import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ApiData from "./components/ApiData";
import Home from "./components/Home";
import Products from "./components/Products";
import Sell from "./components/Sell";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/api" element={<ApiData />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/sell" element={<Sell />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
