import React from "react";
import "./App.css";
import Product from "./components/Product";
import Students from "./components/Students";
function App() {
  const handleLike = title => {
    alert(title + " Liked");
  };
  return (
    <div className="container">
      <h1>Hello Class</h1>
      <div className="">
        <Product title="Lenovo Laptop" price="64000" />
        <Product title="IPhone" price="64000000" />
      </div>
    </div>
  );
}
export default App;
