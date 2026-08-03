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
                <div
                  className="flex flex-row justify-between gap-3"
                  key={item.product.id}
                >
                  {" "}
                  <div className="flex gap-8">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-30 h-30 object-center object-cover rounded"
                    />{" "}
                    <div key={item.id}>
                      <h3 className="pb-3 font-semibold">
                        {item.product.name}
                      </h3>
                      <h3 className="text-md text-gray-400">
                        {item.product.price}
                      </h3>
                    </div>
                  </div>
                  <div className=" flex flex-col items-end">
                    <div className="w-full flex gap-3 items-center pb-3">
                      <button className="px-3 py-0.5 rounded border-gray-400 border border-black-2">
                        -
                      </button>
                      <span className="px-2 ">{item.quantity}</span>
                      <button className="px-3 py-0.5 rounded border-gray-400 border border-black-2">
                        +
                      </button>
                    </div>
                    <p className=" pb-3">${item.product.price * item.quantity}</p>
                    <button className="px-3 py-1 bg-gray-400 text-white rounded">Remove</button>
                  </div>
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
