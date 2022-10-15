import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";
import React, { useState } from "react";

function App() {
  const products = [
    {
      price: 99999,
      pname: "IPhone 10S ",
      quantity: 0,
    },
    {
      price: 9999,
      pname: "Redmi 10S ",
      quantity: 0,
    },
    {
      price: 19999,
      pname: "One plus 10S ",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  const incrementQuatity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuatity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount += newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      pname: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddProduct addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuatity={incrementQuatity}
          decrementQuatity={decrementQuatity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
