import React from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" py-20 px-12 flex items-center justify-center ">
        <div className="text-center">
          {" "}
          <h1 className="text-4xl font-bold leading-tight tracking-wider pb-5">
            Welcome to ShopHub
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing products and great prices
          </p>
        </div>
      </div>
      <div className="px-12">
        <h2 className="text-2xl font-semibold text-gray-600 tracking-wide py-5">
          Our products
        </h2>

        <div className="grid grid-cols-3 gap-5">
          {products.map((product) => (
            <div className="rounded-xl overflow-hidden" key={product.id}>
              <img
                src={product.image}
                alt=""
                className="w-full h-50 object-cover "
              />
              <div className="py-7 bg-white px-3">
                <h3 className="text-gray-600 font-semibold pb-2">
                  {product.name}
                </h3>
                <p className="text-blue-500 font-semibold pb-2">
                  $ {product.price}
                </p>
                <div className="flex gap-2 text-white">
                  <Link className="bg-gray-400 px-3 text-xs py-2 rounded">
                    View Details
                  </Link>
                  <button className="bg-blue-400 px-3 py-2 text-xs rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
