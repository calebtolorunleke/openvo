import React from "react";

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
        <h2 className="text-2xl font-semibold text-gray-600 tracking-wide">
          Our products
        </h2>
      </div>
    </div>
  );
};

export default Home;
