import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const {
    getCartItemsWithProducts,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  const total = getCartTotal();

  return (
    <div className="px-12 py-8">
      <div className="flex gap-8 flex-col">
        <h1 className="text-2xl font-semibold text-gray-600">Checkout</h1>
        <div className="flex flex-row justify-between gap-8">
          <div className="bg-white w-full px-8 py-12 rounded-md">
            <h2 className="text-xl font-semibold text-gray-600 pb-8">
              Order Summary
            </h2>
            <div className="flex flex-col gap-8">
              {getCartItemsWithProducts().map((item) => (
                <div
                  className="flex flex-row justify-between gap-3 border border-gray-100 rounded py-3 px-2"
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
                      <button
                        className="px-3 py-0.5 rounded border-gray-400 border border-black-2"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-2 ">{item.quantity}</span>
                      <button
                        className="px-3 py-0.5 rounded border-gray-400 border border-black-2"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className=" pb-3">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="px-3 py-1 bg-gray-400 text-white rounded"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white min-w-xs px-8 py-12 rounded-md h-full">
            <h1 className="text-xl font-bold text-gray-600 pb-2">Total</h1>
            <div className="flex justify-between py-4 border-b border-gray-200">
              <p>Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>{" "}
            <div className="flex justify-between py-4 border-b-2">
              <p className="text-gray-400">Total:</p>
              <p className="text-blue-500 text-xl font-semibold">
                ${total.toFixed(2)}
              </p>
            </div>
            <div className="pt-8">
              {" "}
              <button className="bg-blue-500 text-white w-full py-3 rounded cursor-pointer">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
