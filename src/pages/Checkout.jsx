import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { getCartItemsWithProducts } = useCart();

  return (
    <div className="px-12 py-8">
      <div className="flex gap-8 flex-col">
        <h1 className="text-2xl font-semibold text-gray-600">Checkout</h1>
        <div className="">
          <div className="bg-white w-xl px-5 py-5 rounded">
            <h2 className="text-xl font-semibold text-gray-600">
              Order Summary
            </h2>
            {getCartItemsWithProducts().map((item) => (
              <div>
                <img src={item.product.image} alt={item.product.name} className="" />{" "}
                <div key={item.id}>{item.product.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
