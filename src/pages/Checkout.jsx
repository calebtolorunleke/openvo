import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { getCartItemsWithProducts } = useCart();

  return (
    <div className="px-12 py-8">
      <div className="flex gap-8 flex-col">
        <h1 className="text-2xl font-semibold text-gray-600">Checkout</h1>
        <div className="">
          <div className="bg-white w-xl px-8 py-12 rounded-md">
            <h2 className="text-xl font-semibold text-gray-600 pb-12">
              Order Summary
            </h2>
            <div className="flex flex-col gap-8">
              {getCartItemsWithProducts().map((item) => (
                <div className="flex gap-8">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-30 h-30 object-center object-cover rounded"
                  />{" "}
                  <div key={item.id} className="">
                    <h3 className="pb-3 font-semibold">{item.product.name}</h3>
                    <h3 className="text-md text-gray-400">
                      {item.product.price}
                    </h3>
                  </div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
