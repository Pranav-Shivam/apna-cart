import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuatity={props.incrementQuatity}
          index={i}
          decrementQuatity={props.decrementQuatity}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>The product are sold</h1>
  );
}
