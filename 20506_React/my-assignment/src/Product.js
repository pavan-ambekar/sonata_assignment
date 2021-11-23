import React from "react";

export default function Product() {
  let product = { name: "Laptop", price: "49999" };
  return (
    <div>
      <img
        src={`https://source.unsplash.com/300x500/?${product.name}`}
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
    </div>
  );
}
