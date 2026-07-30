import React from "react";
import { products } from "../data/products";
import Productcard from "../components/Productcard";

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">

          {/* product card component */}
          {products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
